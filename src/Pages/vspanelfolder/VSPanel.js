import React from 'react';
import './vspanel.css';
// import "./mobileview.css"
import getLogoByTeam from '../constants';
import timer from "../../Assets/timer.png";
import courtimage from "../../Assets/court.png";
import Scorecard from './scorecard';



const VSPanel = ({ homeTeam, awayTeam, homeGoals, awayGoals, time, court }) => {
  return (
    <div className="vs-panel">
       <Scorecard/>
      {/* <div className="team">
        <img src={getLogoByTeam(awayTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(awayTeam).color }} />
      </div>
      <div className="vs-header">
        <div style={{ flexDirection: "column" }}>
          <div style={{justifyItems:"center"}}>
            <span className="team-goals">{awayGoals}</span>
            <span className="vs-text">VS</span>
            <span className="team-goals">{homeGoals}</span>
          </div>
          <div className="match-details" style={{ justifyItems:"center"}}  >
            <div className="icon-text">
              <img src={timer} alt="Timer" style={{ width: "2rem", marginRight: "0.5rem" }} />
              <span>{time}</span>
            </div>
            <div className="icon-text">
              <img src={courtimage} alt="Court" style={{ width: "2rem", marginRight: "0.5rem" }} />
              <span>Court {court}</span>
            </div>
          </div>
         

        </div>


      </div>
      <div className="team">
        <img src={getLogoByTeam(homeTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(homeTeam).color }} />
      </div> */}
    </div>
  );
};


export default VSPanel;
