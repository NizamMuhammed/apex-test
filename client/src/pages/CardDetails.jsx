import { useState } from "react"
import "../styles/CardDetails.css"
import { NavLink as Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { confirmCard } from "../redux/actions/ConfirmCardAction"

const CardDetails = () => {
  const [codeValue, setCodeValue] = useState() //Security code
  const [nameValue, setNameValue] = useState("") //Customer Name
  const [monthValue, setMonthValue] = useState() //card month
  const [yearValue, setYearValue] = useState() //card year
  const dispatch = useDispatch()

  //handler for displaying Security code value
  const handleCodeChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      setCodeValue(e.target.value)
    } else {
      alert("Only numbers are allowed")
    }
  }

  //handler for displaying Name of customer value
  const handleNameChange = (e) => {
    setNameValue(e.target.value)
  }

  //handler for displaying Month value
  const handleMonthChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      setMonthValue(e.target.value)
    } else {
      alert("Only numbers are allowed")
    }
    setMonthValue(e.target.value)
  }
  //handler for displaying Year value
  const handleYearChange = (e) => {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      setYearValue(e.target.value)
    } else {
      alert("Only numbers are allowed")
    }
  }

  const handleSubmit = (e) => {
    const selected = {
      name: nameValue,
      date: `${monthValue}/${yearValue}`,
      cvv: codeValue,
    }
    dispatch(confirmCard(selected))
  }

  return (
    <div className="cardPageContainer">
      <div className="formContainer">
        <h2 style={{ padding: "2rem" }}>Enter Card Details</h2>
        <form>
          <div>Enter your name on card</div>
          <input
            placeholder="Full Name"
            className="nameBox"
            value={nameValue}
            onChange={handleNameChange}
          ></input>
          <div>Enter expiry date</div>
          <input
            placeholder="MM"
            className="datesBox"
            value={monthValue}
            onChange={handleMonthChange}
          ></input>
          <input
            placeholder="YY"
            className="datesBox"
            value={yearValue}
            onChange={handleYearChange}
          ></input>
          <div>Enter security code</div>
          <input
            placeholder="***"
            className="securityBox"
            onChange={handleCodeChange}
            value={codeValue}
          ></input>
        </form>
        <button type="submit" className="button" onClick={handleSubmit}>
          <Link
            to="/fuel-details"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Confirm
          </Link>
        </button>
      </div>
    </div>
  )
}

export default CardDetails
