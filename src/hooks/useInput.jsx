import { useRef } from "react";
import { useState } from "react";

export default function useInput(init, 유효성검사함수) {
  const [value, setValue] = useState(init);
  const 유효성검사결과 = useRef({ 결과: false });

  const onchange = (event) => {
    setValue(event.target.value);

    // 유효성검사함수 parameter 값이 들어가는 경우
    if (유효성검사함수) {
      유효성검사결과.current = 유효성검사함수(event.target.value);
    }
  };

  return [{ value, onchange }, 유효성검사결과];
}
