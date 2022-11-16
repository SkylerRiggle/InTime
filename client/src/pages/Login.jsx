/**
 * Route: /login
 *
 * The login page will handle both registering a new account and
 * logging into an existing one. Aside from this, if an Auth token
 * is available, this page should automatically reroute to the
 * appropriate user dashboard.
 */

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username) alert("Please Input a Username or Email");
    if (!password) alert("Please Input a Password");
  }

  return (
    <>
      <div
        className="d-flex flex-column border border-success rounded container p-3 ps-5 pe-5 mt-5"
        style={{ maxWidth: '700px' }}>
        <h5 class="pb-1 display-4">
          InTime User Login
        </h5>

        <hr/>

        <h5>Enter Account Information:</h5>

        <label>Username/Email</label>
        <input type="text" className="form-control" placeholder="𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦/𝘌𝘮𝘢𝘪𝘭..." onChange={(e) => setUsername(e.target.value)}/>
        <br />
        
        <label>Password</label>
        <input type="password" className="form-control" placeholder="𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥..." onChange={(e) => setPassword(e.target.value)}/>
        <br/>

        <button className="btn btn-primary" onClick={() => handleLogin()}>Log In</button>
        <a href="/" className="text-muted">Forgot Password?</a>
        <br />
        
        <small className="fs-6">Don't have an account?</small>
        <button className="btn btn-outline-danger mb-3">Create Account</button>
      </div>
    </>
  );
};

export default Login;
