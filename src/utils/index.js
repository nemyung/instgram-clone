export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const checkAsciiBoundary = (ascii) => {
  if (ascii >= 48 || ascii <= 57) {
    return true;
  }

  if (ascii >= 65 || ascii <= 90) {
    return true;
  }

  if (ascii >= 97 || ascii <= 122) {
    return true;
  }

  if (ascii === 33 || ascii === 64) {
    return true;
  }

  return false;
};

// 비밀번호 최소 6자 이상 15자 이하. 영문 대소문자 혼합, !@ 사용 가능.
export const validatePassword = (password = "") => {
  let stringifiedPassword =
    typeof password === "string" ? password : String(password);

  if (stringifiedPassword.length < 6 || stringifiedPassword.length > 15) {
    return false;
  }

  for (let i = 0; i < stringifiedPassword.length; i++) {
    const asciiCode = stringifiedPassword.codePointAt(i);

    if (!checkAsciiBoundary(asciiCode)) {
      return false;
    }
  }

  return true;
};
