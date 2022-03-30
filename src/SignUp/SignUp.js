import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { Button } from 'react-bootstrap';
import UserList from '../SignIn/UserList'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ProfilPicture from './ProfilPicture'

function SignUp() {
    const [show, setShow] = useState(false);
    const [errortype, setMessage] = useState(false);
    
    const username = useRef(null);
    const password = useRef(null);
    const passwordVal = useRef(null);
    const nickname = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewUserToList = (username, password, nickname) => {
        UserList.push({ username: username, password: password, nickname: nickname });
    }


    function handleClickSignUp() {
        if (!(username.current.value && username.current.value && nickname.current.value)) {
            setMessage("Empty box, try again!");
            handleShow();
            return (1);
        }
        else if (password.current.value !== passwordVal.current.value) {
            setMessage("There is a mismatch between the passwords, try again!");
            handleShow();
            return (1);
        }
        UserList.forEach((element) => {
            if (element.username === username.current.value) {
                setMessage("The username already exist, try another!");
                handleShow();
                return (1);
            }
        });
        

        addNewUserToList(username.current.value, password.current.value, nickname.current.value);
    }

    return (
        <main className="form-signuup">
            <h1 className="h3 mb-3 fw-normal noselect">Create an account.</h1>
            <form>
                <div className="form-floating">
                    <input ref={username} type="username" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input ref={passwordVal} type="password" className="form-control" id="floatingPasswordVal" placeholder="Password Validation"></input>
                    <label htmlFor="floatingPassword">Password Validation</label>
                </div>
                <div className="form-floating">
                    <input ref={nickname} type="nickname" className="form-control" id="floatingNickname" placeholder="Nickname"></input>
                    <label htmlFor="floatingNickname">Nickname</label>
                </div>
            </form>
            
            <Button className="w-100 btn btn-lg btn-danger" onClick={handleClickSignUp} type="submit">Sign up</Button>
            <Link className="mt-2 w-100 btn btn-lg btn-secondary" to="/" type="submit">Back</Link>
            <ErrorMessage show={show} handleClose={handleClose} page={"Signup Error"} message={errortype} />
        </main>
    );
}

export default SignUp;
