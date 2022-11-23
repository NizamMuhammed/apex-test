import { useState, useEffect } from "react"
import "../styles/Unlocked.css"
import { useNavigate } from "react-router-dom"

const Unlocked = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [showUnlocked, setShowUnlocked] = useState(true)

  //Show Pump unlocked
  setTimeout(() => {
    setShowLoader(true)
  }, 2500)

  //show fuelling loader
  setTimeout(() => {
    setShowUnlocked(false)
  }, 6000)
  const navigate = useNavigate()

  //Go to receipt page
  useEffect(() => {
    setTimeout(() => {
      navigate("/receipt")
    }, 8000)
  }, [navigate])

  return (
    <div>
      {!showLoader && showUnlocked && (
        <div class="wrapper">
          {" "}
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />{" "}
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h2 style={{ margin: "10vh" }}>Pump Unlocked</h2>
        </div>
      )}
      {showUnlocked && showLoader && (
        <div className="wrapper">
          <div class="loader"></div>
          <h2 style={{ margin: "10vh" }}>Pump in use</h2>
        </div>
      )}
      {!showUnlocked && showLoader && (
        <div class="wrapper">
          {" "}
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />{" "}
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h2 style={{ margin: "10vh" }}>Fuelling Complete</h2>
        </div>
      )}
    </div>
  )
}

export default Unlocked
