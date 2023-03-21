import useInput from "../hooks/useInput";
import { validator } from "../util/validator";
import { 회원가입Axios } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [이메일객체, 이메일유효성검사결과] = useInput("", validator.email);
  //[{ value, onchange }, 유효성검사결과];
  // { current : { 결과 : true , 메세지 : '' } }
  console.log(이메일객체);
  console.log(이메일유효성검사결과);

  const [비밀번호객체, 비밀번호유효성검사결과] = useInput("", validator.pw);

  const 버튼활성화 =
    이메일유효성검사결과.current.결과 && 비밀번호유효성검사결과.current.결과;

  const navigate = useNavigate();

  const 회원가입 = async () => {
    try {
      const res = await 회원가입Axios({
        email: 이메일객체.value,
        password: 비밀번호객체.value,
      });
      console.log("응답", res);

      if (res.status == 201) {
        navigate("/signin");
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <label htmlFor="id">id</label>
      <input
        id="id"
        value={이메일객체.value}
        onChange={이메일객체.onchange}
        type="text"
      />

      <label htmlFor="pw">pw</label>
      <input
        id="pw"
        value={비밀번호객체.value}
        onChange={비밀번호객체.onchange}
        type="text"
      />
      <button onClick={회원가입} disabled={!버튼활성화}>
        회원가입 버튼
      </button>
    </>
  );
}
