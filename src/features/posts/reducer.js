import { produce } from "immer";

const initialState = {
  byId: {},
  allIds: [],
};

export default function postsReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default: {
        break;
      }
    }
  });
}
