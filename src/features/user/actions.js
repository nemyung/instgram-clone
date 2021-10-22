import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../../config/firebase";

export const SIGN_UP = "user/SIGN_UP";
export const SIGN_IN = "user/SIGN_IN";
export const SIGN_OUT = "user/SIGN_OUT";

const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const signIn = (payload) => ({
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

export const signInToFirebase = (payload) => async (dispatch) => {
  const { email, password } = payload;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(signIn({ email: user.email, uid: user.uid }));
  } catch (err) {
    if (error.code === AuthErrorCodes.USER_DELETED) {
      throw new Error("입력하신 이메일에 해당하는 유저가 없습니다.");
    }

    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
      throw new Error("비밀번호가 틀립니다. 다시 확인해주세요");
    }
  }
};
