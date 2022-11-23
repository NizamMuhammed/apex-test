import "../styles/FuelDetails.css"
import { NavLink as Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { confirmAmount } from "../redux/actions/ConfirmAmountAction"

const FuelDetails = () => {
  const [amount, setAmount] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    dispatch(confirmAmount(amount))
  }

  const handleChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value)
    } else {
      alert("Only numbers are allowed")
    }
  }

  return (
    <div className="fuelPageContainer">
      <div className="formContainer">
        <h2 style={{ padding: "2rem" }}>Confirm Fuel Details</h2>
        <form>
          <div>Enter amount</div>
          <input
            placeholder="0 GBP"
            className="amountBox"
            onChange={handleChange}
            style={{ minWidth: "3rem" }}
            value={amount}
          ></input>
        </form>
        <button type="submit" className="button" onClick={handleSubmit}>
          <Link
            to="/confirm-details"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Confirm
          </Link>
        </button>
      </div>
    </div>
  )
}

export default FuelDetails
