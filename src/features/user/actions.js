import { createUserWithEmailAndPassword, AuthErrorCodes } from "@firebase/auth";
import { auth } from "../../config/firebase";

export const SIGN_UP = "user/SIGN_UP";
export const SIGN_IN = "user/SIGN_IN";
export const SIGN_OUT = "user/SIGN_OUT";

const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signUpToFirebase = (payload) => async (dispatch) => {
  const { email, password } = payload;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);
    dispatch(signUp({ email: user.email, uid: user.uid }));
  } catch (err) {
    if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
      throw new Error("등록된 이메일이 있습니다.");
    }
  }
};
