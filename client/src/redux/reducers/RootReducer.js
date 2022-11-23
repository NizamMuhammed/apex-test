import { combineReducers } from "redux"
import { ConfirmPumpReducer } from "./ConfirmPumpReducer"
import { ConfirmCardReducer } from "./ConfirmCardReducer"
import { ConfirmAmountReducer } from "./ConfirmAmountReducer"

const RootReducer = combineReducers({
  confirmPump: ConfirmPumpReducer,
  confirmCard: ConfirmCardReducer,
  confirmAmount: ConfirmAmountReducer,
})

export default RootReducer
