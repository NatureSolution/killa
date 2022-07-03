import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SignupForm from "../SignupForm/SignupForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelSigninWithGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  const handelSigninWithFacebook = () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };
  const handelSigninWithGithub = () => {
    signInWithGithub().then(() => {
      navigate(from, { replace: true });
    });
  };
  const handelSigninWithEmailPassward = () => {
    createUserWithEmailAndPassword(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <button onClick={handelSigninWithGoogle}>Google</button>
      <button onClick={handelSigninWithFacebook}>Facebook</button>
      <button onClick={handelSigninWithGithub}>Github</button>
      <br />
      <br />
      {/* <SignupForm /> */}
      <br />
      <div>
        <div className="App">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handelSigninWithEmailPassward}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
