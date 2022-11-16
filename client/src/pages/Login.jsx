/**
 * Route: /login
 *
 * The login page will handle both registering a new account and
 * logging into an existing one. Aside from this, if an Auth token
 * is available, this page should automatically reroute to the
 * appropriate user dashboard.
 */

import { useState } from "react";

const LoginCard = ({ children }) => {
  return (
    <div
    className="d-flex flex-column border border-success rounded container p-3 ps-5 pe-5 mt-5"
    style={{ maxWidth: '500px' }}> { children } </div>
  );
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPass2, setNewPass2] = useState("");

  const handleLogin = () => {
    // Empty field check
    if (!username) alert("Please Input a Username or Email");
    if (!password) alert("Please Input a Password");
  }

  const handleNew = () => {
    // Empty field check
    if (!newEmail) alert("Please Enter a Valid Email");
    if (!newUsername) alert("Please Enter a Valid Username");
    if (!newPass) alert("Please Enter a Valid Password");
    if (!newPass2) alert("Please Re-Type Your Password");

    // Password re-entry check
    if (newPass !== newPass2) {
      alert("Passwords Do Not Match. Please Try Again!");
      setNewPass("");
      setNewPass2("");
    }
  }

  return (
    <div className="d-flex flex-wrap">
      <LoginCard>
        <h5 class="pb-1 display-4">
          Welcome Back!
        </h5>

        <hr/>

        <h5>Enter Account Information:</h5>

        <label>Username/Email</label>
        <input type="text" className="form-control" placeholder="𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦/𝘌𝘮𝘢𝘪𝘭..." onChange={(e) => setUsername(e.target.value)}/>
        <br />
        
        <label>Password</label>
        <input type="password" className="form-control" placeholder="𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥..." onChange={(e) => setPassword(e.target.value)}/>
        <br/>

        <button className="btn text-white" onClick={() => handleLogin()} style={{backgroundColor:"#FF4700"}}>Log In</button>
        <a href="/" className="text-muted mb-3">Forgot Password?</a>
      </LoginCard>

      <LoginCard>
        <h5 class="pb-1 display-4">
          New Here?
        </h5>

        <hr/>

        <h5>New Account Information:</h5>

        <label>Email</label>
        <input type="text" className="form-control mb-2" placeholder="𝘌𝘮𝘢𝘪𝘭..." onChange={(e) => setNewEmail(e.target.value)}/>
        <label>Username</label>
        <input type="text" className="form-control" placeholder="𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦..." onChange={(e) => setNewUsername(e.target.value)}/>
        <br />
        
        <label>Password</label>
        <input type="password" className="form-control mb-2" placeholder="𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥..." onChange={(e) => setNewPass(e.target.value)}/>
        <label>Re-Type Password</label>
        <input type="password" className="form-control" placeholder="𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥..." onChange={(e) => setNewPass2(e.target.value)}/>
        <br/>

        <button className="btn btn-success" onClick={() => handleNew()}>Create Account</button>
      </LoginCard>
    </div>
  );
};

export default Login;
