import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { validator } from "../util/validator";

export default function SignIn() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const [로그인이메일객체, 이메일유효성검사결과] = useInput(
    "",
    validator.email
  );

  console.log(로그인이메일객체);
  console.log(이메일유효성검사결과);

  return (
    <>
      <label htmlFor="sign-in-email">email</label>
      <input
        id="sign-in-email"
        value={로그인이메일객체.value}
        onChange={로그인이메일객체.onchange}
        type="text"
      />

      <label htmlFor="sign-in-pw">pw</label>
      <input id="sign-in-pw" type="text" />
      <button>sign in</button>
      <button onClick={navigateToSignUp}>sign up</button>
    </>
  );
}
