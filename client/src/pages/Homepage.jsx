import "../styles/Homepage.css"
import axios from "axios"
import { NavLink as Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { confirmPump } from "../redux/actions/ConfirmPumpAction"

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState("Select")
  const [selectedPump, setSelectedPump] = useState("Select")
  const [allLocations, setAllLocations] = useState([])
  const [locationPumps, setLocationPumps] = useState([])
  const dispatch = useDispatch()

  //API call to get all location data from server side
  useEffect(() => {
    axios
      .get(`/api/getAll`)
      .then((response) => {
        setAllLocations(response.data.value)
        setSelectedLocation(response.data.value[0].location)
        let arr = []
        for (let i = 1; i <= response.data.value[0].pumpNos; i++) {
          arr.push(i)
        }
        setLocationPumps([...arr])
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const handleSubmit = (e) => {
    const selected = {
      location: selectedLocation,
      pump: selectedPump,
    }
    dispatch(confirmPump(selected))
  }

  const handleLocationChange = (e) => {
    e.preventDefault()
    setSelectedLocation(e.target.value)
    allLocations.map((pump) => {
      let arr = []
      if (pump.location === e.target.value) {
        for (let i = 1; i <= pump.pumpNos; i++) {
          arr.push(i)
        }
        setLocationPumps([...arr])
        setSelectedPump(1)
        console.log(locationPumps, "  :Pumps")
      }
      return locationPumps
    })
  }

  const handlePumpChange = (e) => {
    e.preventDefault()
    setSelectedPump(e.target.value)
  }

  return (
    <div className="homePageContainer">
      <div className="formContainer">
        <h2 style={{ padding: "2rem" }}>Confirm Location</h2>
        <form onSubmit={handleSubmit}>
          <div>Pick Location</div>
          <div>
            <select
              className="dropdownContainer"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              {allLocations.length > 0 ? (
                allLocations.map((location) => {
                  return (
                    <option key={location.id} value={location.location}>
                      {location.location}
                    </option>
                  )
                })
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>
          <div>
            <div>Pick Pump Number</div>
            <div>
              <select
                className="dropdownContainer"
                value={selectedPump}
                onChange={handlePumpChange}
              >
                {locationPumps.map((pump) => (
                  <option key={pump} value={pump}>
                    {pump}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button className="button" type="submit" onClick={handleSubmit}>
              <Link
                to="/card-details"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Confirm
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage
