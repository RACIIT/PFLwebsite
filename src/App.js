import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Points from "./Pages/Points";
import Create from "./Pages/Create";
import Match from "./Pages/Match";
import Schedule from "./Pages/Schedule";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Points />} />
        <Route path="/createClub" element={<Create />} />
        <Route path="/addMatch" element={<Match />} />
        <Route path="/matches" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
