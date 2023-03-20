export const validator = {
  email(value) {
    const 결과 = 이메일패턴.test(value);
    return {
      결과: 결과,
      메세지: 결과 ? "" : "이메일 형식으로 입력해주세요.",
    };
  },

  pw(value) {
    const 결과 = value.length >= 8;
    return {
      결과: 결과,
      메세지: 결과 ? "" : "8자 이상 입력해주세요.",
    };
  },
};

const 이메일패턴 = /@/;
