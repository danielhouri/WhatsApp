import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

    const username = useRef(null);
    const password = useRef(null);
    const nickname = useRef(null);

    
    function handleClickSignUp() {
        if (!(username.current.value && username.current.value)) {
            alert(username.current.value);
        }
            
    }

    return (
        <main className="form-signuup">
            <form>
                <img className="mb-4" src="icon.svg" alt="" width="72" height="57"></img>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                <div className="form-floating">
                    <input ref={username} type="username" className="form-control" id="floatingInput" placeholder="Username"></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input ref={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input ref={nickname} type="nickname" className="form-control" id="floatingNickname" placeholder="Nickname"></input>
                    <label htmlFor="floatingNickname">Nickname</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" onClick={handleClickSignUp} type="submit">Sign up</button>
                <Link className="mt-2 w-100 btn btn-lg btn-secondary" to="/" type="submit">Back</Link>
            </form>
        </main>  
    );
}


export default SignUp;
