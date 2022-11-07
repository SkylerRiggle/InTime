/**
 * Route: /login
 *
 * The login page will handle both registering a new account and
 * logging into an existing one. Aside from this, if an Auth token
 * is available, this page should automatically reroute to the
 * appropriate user dashboard.
 */

const Login = () => {
  return (
    <>
      <div
        className="d-flex flex-column border border-success rounded container p-3 ps-5 pe-5"
        style={{ maxWidth: '500px' }}>
        <h5 class="pb-1 display-4">
          InTime User Login
        </h5>

        <hr/>

        <h5>Enter Account Information:</h5>

        <label>Username/Email</label>
        <input type="text" className="form-control"/>
        <br />
        
        <label>Password</label>
        <input type="password" className="form-control" />
        <br/>

        <button className="btn btn-primary">Log In</button>
        <a href="/" className="text-muted">Forgot Password?</a>
        <br />
        
        <small className="fs-6">Don't have an account?</small>
        <button className="btn btn-outline-danger">Create Account</button>
      </div>
    </>
  );
};

export default Login;
