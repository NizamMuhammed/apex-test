import { ActionTypes } from "../constants/ActionTypes"

export const confirmAmount = (amount) => {
  return {
    type: ActionTypes.CONFIRM_AMOUNT,
    payload: amount,
  }
}
