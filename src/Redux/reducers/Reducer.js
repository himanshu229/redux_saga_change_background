import { ActionTypes } from "../constants/ActionType";

const intialState = {
    colors: [],
};

export const color_reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COLORS:
      return { ...state, colors: payload };
    default:
      return state;
  }
};