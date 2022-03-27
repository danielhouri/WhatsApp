import './SignIn.css';

function SignIn() {
  return (
    <main className="form-signin">
        <form>
            <img className="mb-4" src="icon.svg" alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label htmlFor="floatingInput">Email address</label>
            </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <button className="mt-2 w-100 btn btn-lg btn-success" type="submit">Sign up</button>
        </form>
  </main>  
  );
}

export default SignIn;
