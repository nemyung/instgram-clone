import * as React from "react";
import { useDispatch } from "react-redux";
import { signUpToFirebase } from "../features/user/actions";

export default function useSignUp() {
  const [failMessage, setFailMessage] = React.useState("");
  const dispatch = useDispatch();

  const onSignUp = React.useCallback(async (payload) => {
    try {
      await dispatch(signUpToFirebase(payload));
      return true;
    } catch (err) {
      setFailMessage(err.message);
      return false;
    }
  }, []);

  return [failMessage, onSignUp];
}
