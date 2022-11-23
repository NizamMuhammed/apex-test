import { ActionTypes } from "../constants/ActionTypes"

const initialState = {}

export const ConfirmCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CONFIRM_CARD:
      return { ...state, cardDetails: action.payload }
    default:
      return state
  }
}
