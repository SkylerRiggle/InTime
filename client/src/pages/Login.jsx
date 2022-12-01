/**
 * Route: /login
 *
 * The login page will handle both registering a new account and
 * logging into an existing one. Aside from this, if an Auth token
 * is available, this page should automatically reroute to the
 * appropriate user dashboard.
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Req from "../utils/Req";

const LoginCard = ({ children }) => {
  return (
    <div
    className="d-flex flex-column border border-success rounded container p-3 ps-5 pe-5 mb-5"
    style={{ maxWidth: '500px' }}> { children } </div>
  );
}

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate(`/${user}`);
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPass2, setNewPass2] = useState("");

  const handleLogin = async () => {
    // Empty field check
    if (!username) return alert("Please Input a Username or Email");
    if (!password) return alert("Please Input a Password");

    const response = await Req.login(username, password);
    if (response === true) navigate(`/${localStorage.getItem('user')}`)
  }

  const handleNew = async () => {
    // Empty field check
    if (!newEmail) return alert("Please Enter a Valid Email");
    if (!newUsername) return alert("Please Enter a Valid Username");
    if (!newPass) return alert("Please Enter a Valid Password");
    if (!newPass2) return alert("Please Re-Type Your Password");

    // Password re-entry check
    if (newPass !== newPass2) {
      alert("Passwords Do Not Match. Please Try Again!");
      setNewPass("");
      setNewPass2("");
      return;
    }

    const response = await Req.post('/user/', {
      username: newUsername,
      email: newEmail,
      password: newPass
    });
    if (response) {
      localStorage.setItem('user', response.id)
      navigate(`/${localStorage.getItem('user')}`)
    } else {

    }
  }

  return (
    <div className="d-flex flex-wrap">
      <LoginCard>
        <h5 className="pb-1 display-4">
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

        <button className="btn text-white" onClick={async () => await handleLogin()} style={{backgroundColor:"#FF4700"}}>Log In</button>
      </LoginCard>

      <LoginCard>
        <h5 className="pb-1 display-4">
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

        <button className="btn btn-success" onClick={async () => await handleNew()}>Create Account</button>
      </LoginCard>
    </div>
  );
};

export default Login;
