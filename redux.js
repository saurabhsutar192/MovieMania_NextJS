import { createStore } from "redux";

let initialState = {
  isSearched: false,

  searchRes: [],

  videoId: null,
  clicked: false,
  details: [],
  isTrailer: false,
  isActor: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "isSearched":
      return { ...state, isSearched: action.payload };
    case "setVideoId":
      return { ...state, videoId: action.payload, isTrailer: true };

    case "setSearchRes":
      return {
        ...state,
        searchRes: action.payload,
        isActor: action.isActor,
      };
    case "setClicked":
      return { ...state, clicked: action.payload };
    case "setDetails":
      return { ...state, details: action.payload };
    case "removeTrailer":
      return { ...state, isTrailer: false };

    default:
      return state;
  }
};

export let store = createStore(reducer);
