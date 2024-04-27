import React from 'react';
import './vspanel.css';
import getLogoByTeam from '../constants';


const VSPanel = ({ homeTeam, awayTeam, homeGoals, awayGoals }) => {
  return (
    <div className="vs-panel">
      <div className="team">
        <img src={getLogoByTeam(awayTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(awayTeam).color }} />
      </div>
      <div className="vs-header">
        <div style={{ flexDirection: "column" }}>
          <div>
            <span className="team-goals">{awayGoals}</span>
            <span className="vs-text">VS</span>
            <span className="team-goals">{homeGoals}</span>
          </div>
          <div className="match-details">
            <span>Time: 9:30pm</span>
            <span>Court 2</span>
          </div>
        </div>


      </div>
      <div className="team">
        <img src={getLogoByTeam(homeTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(homeTeam).color }} />
      </div>
    </div>
  );
};


export default VSPanel;
