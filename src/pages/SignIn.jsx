import { useNavigate } from "react-router-dom";
import { 로그인Axios } from "../api/auth";
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

  const [로그인비밀번호객체, 비밀번호유효성검사결과] = useInput(
    "",
    validator.pw
  );

  const 로그인버튼활성화 =
    이메일유효성검사결과.current.결과 && 비밀번호유효성검사결과.current.결과;

  const 로그인 = async () => {
    const res = await 로그인Axios({
      email: 로그인이메일객체.value,
      password: 로그인비밀번호객체.value,
    });

    if (res.status == 200) {
      localStorage.setItem("signInToken", res.data.access_token);
      navigate("/todo");
    }
  };

  return (
    <>
      <label htmlFor="sign-in-email">email</label>
      <input
        id="sign-in-email"
        value={로그인이메일객체.value}
        onChange={로그인이메일객체.onchange}
        type="text"
        data-testid="email-input"
      />

      <label htmlFor="sign-in-pw">pw</label>
      <input
        id="sign-in-pw"
        value={로그인비밀번호객체.value}
        onChange={로그인비밀번호객체.onchange}
        type="text"
        data-testid="password-input"
      />
      <button
        onClick={로그인}
        disabled={!로그인버튼활성화}
        data-testid="signin-button"
      >
        sign in
      </button>
      <button onClick={navigateToSignUp} data-testid="signup-button">
        sign up
      </button>
    </>
  );
}
