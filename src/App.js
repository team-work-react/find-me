import "./App.css";
import SignInSignUp from "./components/login-register";
import Header from "./components/header/index";
import React, { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? (
        <SignInSignUp submitForm={submitForm} isSubmitted={isSubmitted} />
      ) : (
        <div className="App">
          <Header />
        </div>
      )}
    </>
  );
}

export default App;
