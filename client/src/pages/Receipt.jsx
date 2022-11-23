import "../styles/Receipt.css"
import { NavLink as Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Receipt = () => {
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
  const total = amount * 1.67

  return (
    <div className="homePageContainer">
      <div className="receiptContainer">
        <h1>Receipt</h1>
        <div className="h_line">
          -----------------------------------------------------------------------------------
          <div className="details">
            <div className="detailItem">
              <div>Date: </div>
              <p className="text">{date}</p>
            </div>
            <div className="detailItem">
              <div>Location: </div>
              <p className="text">{location}</p>
            </div>
            <div className="detailItem">
              <div>Pump No: </div>
              {pumpNumber === "Select" ? (
                <p className="text">1</p>
              ) : (
                <p className="text">{pumpNumber}</p>
              )}
            </div>
            <div className="detailItem">
              <div>Customer Name: </div>
              <p className="text">{name}</p>
            </div>

            <div className="detailItem">
              <div>Card No: </div>
              <p className="text">{code}</p>
            </div>
          </div>
        </div>
        <table className="table">
          <tr className="tablerow">
            <td className="rowItem">
              <h3 className="headingItem">Item</h3>
            </td>
            <td>
              <h3 className="headingItem">Rate</h3>
            </td>
            <td>
              <h3 className="headingItem">Qty</h3>
            </td>
            <td>
              <h3 className="headingItem">Sub Total</h3>
            </td>
          </tr>

          <tr>
            <td>
              <p>Unleaded Petrol</p>
            </td>
            <td>
              <p>167</p>
            </td>
            <td>
              <p>{amount}</p>
            </td>
            <td>
              <p>£{total}</p>
            </td>
          </tr>
        </table>
        <button className="button">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Finish
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Receipt
