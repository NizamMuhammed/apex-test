import "../styles/About.css"

const About = () => {
  return (
    <div className="aboutPageContainer">
      <h3 className="aboutText">
        A React App for automated fuelling using ASP .NET Core as the Back-End
      </h3>
      <div
        style={{ textAlign: "left", paddingTop: "2rem" }}
        className="stepsText"
      >
        <p style={{ paddingBottom: "1rem" }}>How to use the App:</p>
        <ol>
          <li>Select the Location</li>
          <li>Confirm Pump Number</li>
          <li>Enter Card Details</li>
          <li>Confirm Card Details</li>
          <li>Enter amount & Confirm Details</li>
          <li>Start fuelling</li>
          <li>Collect Receipt after fuelling</li>
        </ol>
      </div>
    </div>
  )
}

export default About
