import { useState, useEffect } from "react";
import "../App.css";
import pflText from "../Assets/text.png";

export default function Create() {
  const [clubName, setClubName] = useState("");
  const [color, setColor] = useState("");
  const [logo, setLogo] = useState("");
  const [teamData, setTeamData] = useState(() => {
    const storedTeamData = localStorage.getItem("teamData");
    return storedTeamData ? JSON.parse(storedTeamData) : [];
  });

  useEffect(() => {
    localStorage.setItem("teamData", JSON.stringify(teamData));
  }, [teamData]);

  useEffect(() => {
    const storedTeamData = localStorage.getItem("teamData");
    if (storedTeamData) {
      setTeamData(JSON.parse(storedTeamData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const capitalizedClubName = clubName.toUpperCase();
    const modifiedColor = "#" + color.trim();
    const newTeamData = {
      clubName: capitalizedClubName,
      color: modifiedColor,
      logo: logo,
      mp: 0,
      win: 0,
      draw: 0,
      lose: 0,
      ga: 0,
      gf: 0,
      gd: 0,
      points: 0,
    };
    setTeamData([...teamData, newTeamData]);
    alert(`${capitalizedClubName}! Welcome to PFL 2023. Good luck!`);
    setClubName("");
    setColor("");
    setLogo("");
  };

  const isDisabled =
    clubName.trim() === "" || color.trim() === "" || logo.trim() === "";

  return (
    <div>
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
            backgroundColor: "#138ce8",
            width: "300px",
            textAlign: "center",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Create Team
        </h1>
      </div>
      <div className="createTeamBox">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="createTeam">
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                required
              />
              <span>Club Name</span>
              <i></i>
            </div>
            <div className="createTeam">
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
              <span>Team Color</span>
              <i></i>
            </div>
            <div className="createTeam">
              <input
                type="text"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                required
              />
              <span>Team Logo</span>
              <i></i>
            </div>
            <input type="submit" value="Create Team" disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
}
