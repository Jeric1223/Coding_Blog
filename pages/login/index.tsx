import React from "react";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

const Login = () => {
  const provider = new GithubAuthProvider();
  provider.addScope("repo");
  provider.setCustomParameters({
    allow_signup: "false",
  });

  const auth = getAuth();

  const githubOAuthSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        console.log(credential);
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        // ...
      });
  };

  const signOutSubmit = () => {
    signOut(auth)
      .then((res) => {
        // Sign-out successful.
        console.log(res);
        console.log(`signOut successful`);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>
      <button
        style={{ width: "200px", height: "70px", backgroundColor: "black" }}
        onClick={githubOAuthSubmit}
      ></button>
      <button
        style={{ width: "200px", height: "70px", backgroundColor: "blue" }}
        onClick={signOutSubmit}
      ></button>
    </>
  );
};

export default Login;
