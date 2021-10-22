import * as React from "react";
import { validateEmail, validatePassword } from "../utils";

const EMAIL_FAIL_MESSAGE = "올바르지 않은 이메일 형식입니다.";
const PASSWORD_FAIL_MESSAGE = "올바르지 않은 비밀번호 형식입니다.";

export default function useStateWithValidation(type, initialValue) {
  const [state, setState] = React.useState(
    typeof initialValue === "function" ? initialValue() : initialValue
  );
  const [isStateValid, setIsStateValid] = React.useState(true);
  const [failMessage, setFailMessage] = React.useState("");

  const onStateChange = React.useCallback((nextState) => {
    setState(nextState);
    if (nextState.length === 0) {
      setIsStateValid(true);
      return;
    }

    const isNextStateValid =
      type === "email" ? validateEmail(nextState) : validatePassword(nextState);

    if (isNextStateValid) {
      setFailMessage("");
    } else {
      setFailMessage(
        type === "email" ? EMAIL_FAIL_MESSAGE : PASSWORD_FAIL_MESSAGE
      );
    }

    setIsStateValid(isNextStateValid);
  }, []);

  return [state, onStateChange, isStateValid, failMessage];
}
