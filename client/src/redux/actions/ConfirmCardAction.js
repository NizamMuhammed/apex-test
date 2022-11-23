import { ActionTypes } from "../constants/ActionTypes"

export const confirmCard = (card) => {
  return {
    type: ActionTypes.CONFIRM_CARD,
    payload: card,
  }
}
