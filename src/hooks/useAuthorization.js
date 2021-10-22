import * as React from "react";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "@firebase/auth";
import { signIn } from "../features/user/actions";
import { auth } from "../config/firebase";

export default function useAuthorization() {
  const [status, setStatus] = React.useState("idle");
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const payload = { email: user.email, uid: user.uid };
        dispatch(signIn(payload));
        setStatus("success");
        return;
      }

      setStatus("fail");
    });

    return () => unsubscribe();
  }, []);

  return status;
}
