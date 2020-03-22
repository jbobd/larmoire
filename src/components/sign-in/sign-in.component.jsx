import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
