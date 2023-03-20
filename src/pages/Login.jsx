import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      아이디:
      <input type="text" />
      비밀번호:
      <input type="text" />
      <button>login</button>
      <button onClick={navigateToSignUp}>signup</button>
    </>
  );
}
