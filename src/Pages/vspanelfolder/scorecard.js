import React from 'react';
import './vspanel.css';
// import "./mobileview.css"
import getLogoByTeam from '../constants';
import timer from "../../Assets/timer.png";
import courtimage from "../../Assets/court.png";

import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';



const DemoPaper = styled(Paper)(({ theme }) => ({
    // width: 120,
    // height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    justifyItems: "center",
    textAlign: 'center',
    borderRadius: "25px",
    backgroundColor: "#000232"
}));

export default function Scorecard({ homeTeam, awayTeam, homeGoals, awayGoals, time, court }) {
    const away = awayGoals !== undefined ? awayGoals : 0;
    const home = homeGoals !== undefined ? homeGoals : 0;

    const getLeadingTeam = (homeGoals, awayGoals) => {
        if (awayGoals === undefined|| homeGoals === undefined) {
            return "";
        }
        else if (homeGoals > awayGoals) {
            return `${homeTeam} WON `;
        } else if (homeGoals < awayGoals) {
            return `${awayTeam} WON `;
        } else {
            return "DRAW";
        }
    };

    const leadingTeam = getLeadingTeam(homeGoals, awayGoals);

    return (


        <div className="vs-panel">
            <Stack direction="row" spacing={2} sx={{
                justifyContent: 'center',
                // backgroundColor:"red",
            }}>
                <DemoPaper variant="default" style={{ backgroundColor: "transparent" }}>
                    <img src={getLogoByTeam(homeTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(homeTeam).color }} />
                </DemoPaper>
                <DemoPaper variant="default" >
                         <span className="vs-text" style={{color:"white"}}>{leadingTeam}</span>
                    <div style={{ justifyItems: "center"}}>
                        <span className="team-goals">{home}</span>
                        <span className="vs-text">VS</span>
                        <span className="team-goals">{away}</span>
                    </div>
                    <div className="match-details" style={{ justifyItems: "center", padding: "-1rem" }}  >
                        <div className="icon-text">
                            <img src={timer} alt="Timer" style={{ width: "2rem", marginRight: "0.5rem" }} />
                            <span>{time}</span>
                        </div>
                        <div className="icon-text">
                            <img src={courtimage} alt="Court" style={{ width: "2rem", marginRight: "0.5rem" }} />
                            <span>Court {court}</span>
                        </div>
                    </div>
                </DemoPaper>
                <DemoPaper variant="default" style={{ backgroundColor: "transparent" }}>
                    <img src={getLogoByTeam(awayTeam).logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam(awayTeam).color }} />
                </DemoPaper>
            </Stack>
        </div>


    );
}



