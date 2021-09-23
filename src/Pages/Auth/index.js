import React from "react";
// import "./index.scss";
import "Pages/Auth/index.scss";
const Auth = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">JYflix</h1>

      <img className="wrapper__bg" src="/images/bg.jpg" alt="background" />
      <div className="auth">
        <span className="auth__title">Sign In</span>
        <input className="auth__input" placeholder="Email"></input>
        <input className="auth__input" placeholder="Password"></input>
        <button className="auth__signinBtn auth__btn">Sign In</button>
        <button className="auth__signinAnon auth__btn">
          Sign In anonymously
        </button>
        <span className="auth__noti">
          아직 가입하지 않으셨나요 ? <strong>회원가입</strong>
        </span>
      </div>
    </div>
  );
};

export default Auth;
