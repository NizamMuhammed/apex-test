import { ActionTypes } from "../constants/ActionTypes"

const initialState = {}

export const ConfirmAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CONFIRM_AMOUNT:
      return { ...state, amount: action.payload }
    default:
      return state
  }
}
