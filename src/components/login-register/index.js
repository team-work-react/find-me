import Register from "./Register";
import React, { useState } from "react";
import Login from "./Login";

const SignInSignUp = ({ submitForm, isSubmitted, users }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  const showRegisterForm = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  return (
    <div>
      {showLogin && <Login showRegisterForm={showRegisterForm} />}
      {showRegister && <Register showLoginForm={showLoginForm} />}
      {/* {!isSubmitted && <Register submitForm={submitForm} users={users} />} */}
    </div>
  );
};

export default SignInSignUp;
