import { produce } from "immer";

import { SIGN_UP, SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
  uid: "",
  email: "",
  isAuthorized: false,
};

export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP:
      case SIGN_IN: {
        draft.uid = action.payload.uid;
        draft.email = action.payload.email;
        draft.isAuthorized = true;
        break;
      }
      case SIGN_OUT: {
        draft.uid = "";
        draft.email = "";
        draft.isAuthorized = false;
        break;
      }
      default: {
        break;
      }
    }
  });
}
