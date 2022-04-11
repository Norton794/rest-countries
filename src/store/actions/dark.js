import { TOOGLE_DARK_MODE } from "./actionTypes";
export function toogle(newState) {
  return {
    type: TOOGLE_DARK_MODE,
    payload: newState
  };
}
