import React from "react";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src="../spotify_logo.jpg" alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
