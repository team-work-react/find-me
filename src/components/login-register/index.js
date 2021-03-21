import Register from "./Register";
//import Login from "./Login";

const SignInSignUp = ({ submitForm, isSubmitted }) => {
  return <div>{!isSubmitted && <Register submitForm={submitForm} />}</div>;
};

export default SignInSignUp;
