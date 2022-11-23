import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage"
import About from "./pages/About"
import CardDetails from "./pages/CardDetails"
import FuelDetails from "./pages/FuelDetails"
import ConfirmDetails from "./pages/ConfirmDetails"
import Unlocked from "./pages/Unlocked"
import Receipt from "./pages/Receipt"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/fuel-details" element={<FuelDetails />} />
          <Route path="/confirm-details" element={<ConfirmDetails />} />
          <Route path="/unlocked" element={<Unlocked />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
