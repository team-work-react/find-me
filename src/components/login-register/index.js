import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const SignInSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>{!isSubmitted ? <Register submitForm={submitForm} /> : <Login />}</div>
  );
};

export default SignInSignUp;
