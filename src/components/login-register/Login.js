import React from "react";
import styles from "./style.module.css";
import logo from "./../../assets/images/findMe.png";
import { validateLoginInfo } from "./validateInfo";
import useFormLogin from "./useFormLogin";

function Login({ showRegisterForm, submitForm, users }) {
  const { handleChange, values, handleSubmit, errors } = useFormLogin(
    submitForm,
    validateLoginInfo,
    users
  );
  return (
    <>
      <div className={styles.logoSignIn}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.formWrapper}>
        <form method="POST" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <p className={styles.subtitleLogin}>
            Stay updated on your professional world
          </p>
          <div className={styles.formFields}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errors}>{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.errors}>{errors.password}</p>
            )}
            <input type="submit" value="Sign in" className={styles.btnSignIn} />
          </div>
          <div className={styles.loginedUser}>
            <span>New to FindMe?</span>
            <span className={styles.alreadyLogined} onClick={showRegisterForm}>
              Join now
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
