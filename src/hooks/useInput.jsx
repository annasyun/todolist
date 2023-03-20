import React, { useRef } from "react";
import { useState } from "react";

export default function useInput(init, 유효성검사함수) {
  const [value, setValue] = useState(init);
  const 유효성검사결과 = useRef({결과 : false})

        console.log('유효성검사결과', 유효성검사결과);


  const onchange = (event) => {
    setValue(event.target.value);
    유효성검사결과.current = 유효성검사함수(event.target.value);
  }

  return [ {value, onchange}, 유효성검사결과];
}
