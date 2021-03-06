import "./App.css";
import SignInSignUp from "./components/login-register";
import Header from "./components/header/index";
import AppBody from "./components/main-content/index";
import React, { useState } from "react";

export const userDatas = [
  {
    email: "narestepanyan90@gmail.com",
    password: "123456",
    password2: "123456",
    username: "Nare",
  },
  {
    email: "anna.bay@list.ru",
    password: "123456",
    password2: "123456",
    username: "Anna",
  },
  {
    email: "ana.matinyan@gmail.com",
    password: "123456",
    password2: "123456",
    username: "Anahit",
  },
  {
    email: "gnikoghosyan98@gmail.com",
    password: "123456",
    password2: "123456",
    username: "Gayane",
  },
];
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  localStorage.setItem("userDatas", JSON.stringify(userDatas));
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <SignInSignUp submitForm={submitForm} users={userDatas} />
      ) : (
        <div className="App">
          <Header />
          <AppBody />
        </div>
      )}
    </>
  );
}
export default App;
