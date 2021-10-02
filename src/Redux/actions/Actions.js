import { ActionTypes } from "../constants/ActionType";

export const setColors = (colors) => {
  return {
    type: ActionTypes.SET_COLORS,
    payload: colors,
  };
};
