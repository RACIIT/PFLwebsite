import pflText from "../Assets/main.png";
import { useEffect, useState } from "react";
import "./schedule.css";
// import logo9 from "../Assets/football.png";
import logo10 from "../Assets/timer.png";
import logo11 from "../Assets/court.png";
import getLogoByTeam from "./constants";
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
    <div style={{ marginBottom: "6rem",marginTop: "10rem", }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
      </div>
      {matchSchedule.slice(1).map((match) => {
        const isResultAvailable = (match[4] && match[5]);
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
                      backgroundColor: getLogoByTeam(match[0]).color,
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                    alt="Logo"
                  />
                  <p>{match[0]}</p>
                  <p>{match[4]}</p>
                </div>
                <h1 style={{ color: "white" }}>Vs</h1>
                <div
                  className="away-club"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <p>{match[5]}</p>
                  <p className="score">{match[1]}</p>
                  <img
                    src={getLogoByTeam(match[1]).logo}
                    style={{
                      width: "80px",
                      backgroundColor: getLogoByTeam(match[1]).color,
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

