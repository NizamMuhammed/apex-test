import { ActionTypes } from "../constants/ActionTypes"

const initialState = {}

export const ConfirmPumpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CONFIRM_PUMP:
      return { ...state, selectedLocation: action.payload }
    default:
      return state
  }
}
