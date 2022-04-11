import { TOOGLE_DARK_MODE } from "../actions/actionTypes";

const initialState = false

export default function (state = initialState, action) {
    console.log(state+ '  '+ JSON.stringify(action))
    switch (action.type) {
      case TOOGLE_DARK_MODE:
        return action.payload
      default:
        return state;
    }
  }