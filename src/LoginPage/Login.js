import React from "react";
import Loginacc from "./Loginacc";
import "./Login.css";
const Login = () => {
  return (
    <React.Fragment>
      <div className="cl">
        <div className="cl1">
          <h1>Login to Your Account </h1>
          <p>Login using Social Networks</p>
          <Loginacc className="icons" />
          <p>
            <hr></hr>
          </p>
          <form>
            <input placeholder="Email" className="input" />
            <input placeholder="Password" className="input" />
          </form>
          <div className="btn">
            <button type="submit">Sign In</button>
          </div>
        </div>
        <div className="cl2">
          <div>
            <h1>New Here?</h1>
            <p>Sign in Find out what are you missing?</p>
          </div>
          <div className="buton">
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
