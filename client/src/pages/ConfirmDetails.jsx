import "../styles/ConfirmDetails.css"
import { NavLink as Link } from "react-router-dom"
import { useSelector } from "react-redux"

const ConfirmDetails = () => {
  const location = useSelector(
    (state) => state.confirmPump.selectedLocation.location
  )
  const pumpNumber = useSelector(
    (state) => state.confirmPump.selectedLocation.pump
  )
  const name = useSelector((state) => state.confirmCard.cardDetails.name)
  const date = useSelector((state) => state.confirmCard.cardDetails.date)
  const code = useSelector((state) => state.confirmCard.cardDetails.cvv)
  const amount = useSelector((state) => state.confirmAmount.amount)

  const handleSubmit = () => {}

  return (
    <div className="confirmPageContainer">
      <div className="formContainer">
        <h2 style={{ padding: "2rem" }}>Confirm Details</h2>
        <form>
          <div className="item">
            <div className="itemText">Location:</div>
            <h3>{location}</h3>
          </div>
          <div className="item">
            <div className="itemText">Pump Number:</div>
            <h3>{pumpNumber}</h3>
          </div>
          <div className="item">
            <div className="itemText">Name on Card:</div>
            <h3>{name}</h3>
          </div>
          <div className="item">
            <div className="itemText">Expiry Date:</div>
            <h3>{date}</h3>
          </div>
          <div className="item">
            <div className="itemText">Secret Code:</div>
            <h3>{code}</h3>
          </div>
          <div className="item">
            <div className="itemText">Amount:</div>
            <h3>£{amount}</h3>
          </div>
        </form>
        <button type="submit" className="button" onClick={handleSubmit}>
          <Link
            to="/unlocked"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Confirm
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ConfirmDetails
