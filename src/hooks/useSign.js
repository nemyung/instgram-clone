import * as React from "react";
import { useDispatch } from "react-redux";
import { signUpToFirebase } from "../features/user/actions";
import { signInToFirebase } from "../features/user/actions";

export default function useSign(type) {
  const [failMessage, setFailMessage] = React.useState("");
  const dispatch = useDispatch();

  const onSign = React.useCallback(async (payload) => {
    try {
      await dispatch(
        type === "signUp"
          ? signUpToFirebase(payload)
          : signInToFirebase(payload)
      );
      return true;
    } catch (err) {
      setFailMessage(err.message);
      return false;
    }
  }, []);

  return [failMessage, onSign];
}
