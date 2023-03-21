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

  console.log(로그인이메일객체);
  console.log(이메일유효성검사결과);

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
    console.log("응답:", res);
  };

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
      <input
        id="sign-in-pw"
        value={로그인비밀번호객체.value}
        onChange={로그인비밀번호객체.onchange}
        type="text"
      />
      <button onClick={로그인} disabled={!로그인버튼활성화}>
        sign in
      </button>
      <button onClick={navigateToSignUp}>sign up</button>
    </>
  );
}
