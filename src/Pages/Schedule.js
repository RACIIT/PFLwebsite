import pflText from "../Assets/text.png";
import { useEffect, useState } from "react";
import "./schedule.css";
// import logo9 from "../Assets/football.png";
import logo10 from "../Assets/timer.png";
import logo11 from "../Assets/court.png";
import logo1 from "../Assets/akela.PNG";
import logo2 from "../Assets/ceros.PNG";
import logo3 from "../Assets/grizzly.PNG";
import logo4 from "../Assets/hydra.PNG";
import logo5 from "../Assets/raptors.PNG";
import logo6 from "../Assets/stags.PNG";
import logo7 from "../Assets/tusker.PNG";
import logo8 from "../Assets/valiente.PNG";

export default function Create() {
  const [matchSchedule, setMatchSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1E5ZSCPJY3Fc4_qqsGTNjHhRhDodRo0H-r7r_2i6tFVA/values/Matches?alt=json&key=AIzaSyCPTSkOEQz2OmZNRlrhxXZPMqVgebH9X_I')
      .then(response => response.json())
      .then(data => {
        const values = data.values;
        // const transposedData = transpose(values);
        console.log("data>>>>>>>>>>", values[2]);
        setMatchSchedule(values);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <div style={{ marginBottom: "20px" }}>
      <img
        src={pflText}
        alt="Logo"
        style={{
          display: "block",
          margin: "auto",
          width: "300px",
          marginTop: "90px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            marginTop: "40px",
            // backgroundColor: "#138ce8",
            width: "300px",
            textAlign: "center",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Group Matches
        </h1>
      </div>
      {matchSchedule.slice(1).map((match) => {
        const isResultAvailable = match.hGoals !== "" || match.aGoals !== "";
        return (
          <>
            <div
              style={{
                backgroundColor: isResultAvailable ? "green" : "#0d446f",
                maxWidth: "1400px",
                margin: "0 auto",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                  backgroundColor: "#0d446f",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <div className="home-club">
                  <img
                    src={getLogoByTeam(match[0]).logo}
                    style={{
                      width: "80px",
                      // backgroundColor: x.hColor,
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                    alt="Logo"
                  />
                  <p>{match[0]}</p>
                  <p>3</p>
                </div>
                <h1 style={{ color: "white" }}>Vs</h1>
                <div
                  className="away-club"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <p>3</p>
                  <p className="score">{match[1]}</p>
                  <img
                    src={getLogoByTeam(match[1]).logo}
                    style={{
                      width: "80px",
                      // backgroundColor: x.aColor,
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                    alt="Logo"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo10}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                  alt="Logo"
                />
                <p
                  style={{
                    color: "white",
                    marginTop: "6px",
                    marginRight: "100px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {match[2]}
                </p>
                <img
                  src={logo11}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "-2px",
                  }}
                  alt="Logo"
                />
                <p
                  style={{
                    color: "white",
                    marginTop: "6px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {match[3]}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}



function getLogoByTeam(clubName) {
  if (!clubName || clubName.trim() === "") {
    return null; // Return null if clubName is empty or whitespace
  }

  switch (clubName.toUpperCase()) {
    case "AKELA":
      return { logo: logo1, color: "#FF5733" }; 
    case "CEROS":
      return { logo: logo2, color: "#33FF57" }; 
    case "GRIZZLY":
      return { logo: logo3, color: "#5733FF" }; 
    case "HYDRA":
      return { logo: logo4, color: "#FF3357" }; 
    case "RAPTORS":
      return { logo: logo5, color: "#57FF33" }; 
    case "STAGS":
      return { logo: logo6, color: "#3357FF" }; 
    case "TUSKER":
      return { logo: logo7, color: "#FF5733" }; 
    case "VALIENTE":
      return { logo: logo8, color: "#33FF57" }; 
    default:
      return null;
  }
}

