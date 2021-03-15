import React from "react";
import styles from "./style.module.css";
import logo from "./../../assets/images/findMe.png";
import useForm from "./useForm";
import validate from "./validateInfo";

const Register = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <img src={logo} alt="logo" className={styles.logoSignUp} />
      <h1 className={styles.headerSignUp}>
        Make the most of your professional life
      </h1>
      <div className={styles.formWrapper}>
        <form method="POST" onSubmit={handleSubmit}>
          <div className={styles.formFields}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errors}>{errors.email}</p>}
            <label>Password (6 or more characters)</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.errors}>{errors.password}</p>
            )}
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && (
              <p className={styles.errors}>{errors.password2}</p>
            )}
            <input type="submit" value="Join" className={styles.btnSignIn} />
          </div>
          <div className={styles.loginedUser}>
            <span>Already on FindMe?</span>
            <span className={styles.alreadyLogined}>Sign in</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
