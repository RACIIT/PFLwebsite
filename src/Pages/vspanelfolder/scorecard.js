import React, { Component } from 'react';
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
    backgroundColor:"#000232"
}));

export default function Scorecard() {
    return (



        <Stack direction="row" spacing={2} sx={{
            justifyContent: 'center',
            // backgroundColor:"red",
        }}>
            <DemoPaper variant="default" style={{backgroundColor:"transparent"}}>
                <img src={getLogoByTeam("Falcon").logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam("Falcon").color }} />
            </DemoPaper>
            <DemoPaper variant="default" >
                <div style={{ justifyItems: "center" }}>
                    <span className="team-goals">3</span>
                    <span className="vs-text">VS</span>
                    <span className="team-goals">3</span>
                </div>
                <div className="match-details" style={{ justifyItems: "center",padding: "-1rem" }}  >
                    <div className="icon-text">
                        <img src={timer} alt="Timer" style={{ width: "2rem", marginRight: "0.5rem" }} />
                        <span>9:30am</span>
                    </div>
                    <div className="icon-text">
                        <img src={courtimage} alt="Court" style={{ width: "2rem", marginRight: "0.5rem" }} />
                        <span>Court 2</span>
                    </div>
                </div>
            </DemoPaper>
            <DemoPaper variant="default" style={{backgroundColor:"transparent"}}>
                <img src={getLogoByTeam("Akela").logo} alt="Logo" className="team-logo" style={{ backgroundColor: getLogoByTeam("Akela").color }} />
            </DemoPaper>
        </Stack>

    );
}



