import React from "react";
import styles from "./style.module.css";
import logo from "./../../assets/images/findMe.png";

function Login() {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logoSignIn} />
      <div className={styles.formWrapper}>
        <form method="POST">
          <h1>Sign in</h1>
          <p className={styles.subtitleLogin}>
            Stay updated on your professional world
          </p>
          <div className={styles.formFields}>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Sign in" className={styles.btnSignIn} />
          </div>
          <div className={styles.loginedUser}>
            <span>New to FindMe?</span>
            <span className={styles.alreadyLogined}>Join now</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
