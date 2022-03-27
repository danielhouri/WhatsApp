import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import UserList from './UserList';

function SignIn() {

    const username = useRef(null);
    const password = useRef(null);
    
    function handleClickSignIn() {
        if (!(username.current.value && username.current.value)) {
            alert(username.current.value);
        }
            
    }

    return (
        <main className="form-signin">
            <form>
                <img className="mb-4" src="icon.svg" alt="" width="72" height="57"></img>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input ref={username} type="username" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                

                <button className="w-100 btn btn-lg btn-primary" onClick={handleClickSignIn} type="submit">Sign in</button>
                <Link className="mt-2 w-100 btn btn-lg btn-success" to='/signup' type="submit">Sign up</Link>
            </form>
        </main>  
    );
}


export default SignIn;
