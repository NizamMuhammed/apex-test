import { ActionTypes } from "../constants/ActionTypes"

export const confirmPump = (pump) => {
  return {
    type: ActionTypes.CONFIRM_PUMP,
    payload: pump,
  }
}
