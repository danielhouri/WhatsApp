import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import UserList from './UserList';
import { Button } from 'react-bootstrap';
import ErrorMessage from '../ErrorMessage/ErrorMessage'


function SignIn(props) {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const username = useRef(null);
    const password = useRef(null);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleClickSignIn = () => {
        var valid = false;
        UserList.forEach((element) => {
            if ((element.username === username.current.value) && element.password === password.current.value) {
                valid = true;
                props.setLoginDetails({username: element.username,
                src: element.src,});
                navigate("/chat");
            }
        });

        if (!valid) {
            handleShow();
        };
    }

    return (
        <main className="form-signin">
            <form>
                <img className="mb-4 noselect" src="icon.svg" alt="logo" width="70" role="img"></img>
                <h1 className="h3 mb-3 fw-normal noselect">Please sign in</h1>
                <div className="form-floating">
                    <input ref={username} type="username" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </form>
            <Button className="w-100 btn btn-lg btn-primary" onClick={handleClickSignIn} type="submit">Sign in</Button>
            <Link className="mt-2 w-100 btn btn-lg btn-success" to='/signup' type="submit">Sign up</Link>

            <ErrorMessage show={show} handleClose={handleClose} page={"Signin Error"} message={"Wrong credentials, try again!"}/>
        </main>
    );
}


export default SignIn;
