import { useEffect, useState } from "react";
import pflText from "../Assets/main.png";
import Spinner from "react-bootstrap/Spinner";
import "./points.css";
import logo1 from "../Assets/akela.PNG";
import logo2 from "../Assets/ceros.PNG";
import logo3 from "../Assets/grizzly.PNG";
import logo4 from "../Assets/hydra.PNG";
import logo5 from "../Assets/raptors.PNG";
import logo6 from "../Assets/stags.PNG";
import logo7 from "../Assets/tusker.PNG";
import logo8 from "../Assets/valiente.PNG";

export default function Points() {
  const [teamRow, setTeamRow] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGreenColor, setIsGreenColor] = useState(false); // Controlling the color


  useEffect(() => {
    setLoading(true);
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1E5ZSCPJY3Fc4_qqsGTNjHhRhDodRo0H-r7r_2i6tFVA/values/Points?alt=json&key=AIzaSyCPTSkOEQz2OmZNRlrhxXZPMqVgebH9X_I')
      .then(response => response.json())
      .then(data => {
        const values = data.values;
        // const transposedData = transpose(values);
        console.log("data>>>>>>>>>>", values[2]);
        setTeamRow(values);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // useEffect(() => {
  //   const storedTeamData = localStorage.getItem("teamData");
  //   if (storedTeamData) {
  //     const parsedTeamData = JSON.parse(storedTeamData);
  //     const sortedTeamData = parsedTeamData.sort((a, b) => {
  //       if (b.points !== a.points) {
  //         return b.points - a.points;
  //       } else {
  //         return b.gf - b.ga - (a.gf - a.ga);
  //       }
  //     });

  //     setTeamData(sortedTeamData);
  //       setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    setLoading(false);
    setIsGreenColor(false); // Set isGreenColor to true when the useState is true
  }, [isGreenColor]);

  if (teamRow === null) {
    return (<div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Spinner animation="grow" variant="success" />
    </div>);
  } else {
    return (
      <div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <Spinner animation="grow" variant="success" />
          </div>
        ) : (
          <>
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
            <div style={{ marginTop: "50px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                <div className="main-table">
                  {teamRow.length > 0 && ( // Check if teamRow has been fetched and is not empty
                    <>
                      <p className="card-header pos">{teamRow[0]?.[0]}</p>
                      <p className="card-header name">{teamRow[0]?.[1]}</p>
                      <p className="card-header">{teamRow[0]?.[2]}</p>
                      <p className="card-header">{teamRow[0]?.[3]}</p>
                      <p className="card-header">{teamRow[0]?.[4]}</p>
                      <p className="card-header">{teamRow[0]?.[5]}</p>
                      <p className="card-header">{teamRow[0]?.[6]}</p>
                      <p className="card-header">{teamRow[0]?.[7]}</p>
                      <p className="card-header">{teamRow[0]?.[8]}</p>
                      <p className="card-header">{teamRow[0]?.[9]}</p>
                    </>
                  )}
                </div>
              </div>
              {teamRow.slice(1).map((team, index) => ( // Start from index 1 to skip the header row
                <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                  <div className={`table ${isGreenColor && index < 4 ? "green-row" : ""}`}>
                    <p className="card-header pos">{index + 1}</p>
                    <p className="card-header name">
                      <img
                        src={getLogoByTeam(team[1])} // Assuming team[1] contains the clubName
                        style={{
                          width: "44px",
                          marginRight: "10px",
                          backgroundColor: team.color, // Assuming there's a color property in team
                          borderRadius: "50px",
                          padding: "5px",
                        }}
                        alt="Logo"
                      />
                      {team[1]} {/* Assuming team[1] contains the clubName */}
                    </p>
                    <p className="card-header">{team[2]}</p>
                    <p className="card-header">{team[3]}</p>
                    <p className="card-header">{team[4]}</p>
                    <p className="card-header">{team[5]}</p>
                    <p className="card-header">{team[6]}</p>
                    <p className="card-header">{team[7]}</p>
                    <p className="card-header">{team[8] - team[7]}</p>
                    <p className="card-header">{team[9]}</p>
                  </div>
                </div>
              ))}

            </div>
          </>
        )}
      </div>
    );
  }


}
function getLogoByTeam(clubName) {
  if (!clubName || clubName.trim() === "") {
    return null; // Return null if clubName is empty or whitespace
  }

  switch (clubName.toUpperCase()) {
    case "AKELA":
      return logo1;
    case "CEROS":
      return logo2;
    case "GRIZZLY":
      return logo3;
    case "HYDRA":
      return logo4;
    case "RAPTORS":
      return logo5;
    case "STAGS":
      return logo6;
    case "TUSKER":
      return logo7;
    case "VALIENTE":
      return logo8;
    default:
      return null;
  }
}

