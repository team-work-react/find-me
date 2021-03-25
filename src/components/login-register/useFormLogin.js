import { useState, useEffect } from "react";

const useFormLogin = (submitForm, validate, users) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, users));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors, isSubmitting, submitForm]);
  return { handleChange, values, handleSubmit, errors };
};

export default useFormLogin;
