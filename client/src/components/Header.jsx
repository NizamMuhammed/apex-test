import "../styles/Header.css"
import { NavLink as Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className="navbarContainer">
        <h2 className="appNameContainer">
          <p className="appName">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              My Fuel
            </Link>
          </p>
        </h2>
        <div className="aboutTextContainer">
          <p className="aboutText">
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              About
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
