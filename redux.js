import { createStore } from "redux";

let initialState = {
  videoId: null,
  isTrailer: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setVideoId":
      return { ...state, videoId: action.payload, isTrailer: true };

    case "removeTrailer":
      return { ...state, isTrailer: false };

    default:
      return state;
  }
};

export let store = createStore(reducer);
