import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Header from "./../../components/header/index";

const SignInSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <Register submitForm={submitForm} /> : <Header />}
    </div>
  );
};

export default SignInSignUp;
