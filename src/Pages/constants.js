import logo1 from "../Assets/akela.PNG";
import logo2 from "../Assets/ceros.PNG";
import logo3 from "../Assets/grizzly.PNG";
import logo4 from "../Assets/hydra.PNG";
import logo5 from "../Assets/raptors.PNG";
import logo6 from "../Assets/stags.PNG";
import logo7 from "../Assets/tusker.PNG";
import logo8 from "../Assets/valiente.PNG";
import logo9 from "../Assets/Falcon.png";
import logo10 from "../Assets/Seahawk.png";
import logo11 from "../Assets/Panther.png";
import logo12 from "../Assets/Phoenix.png";

function getLogoByTeam(clubName) {
    if (!clubName || clubName.trim() === "") {
      return null; // Return null if clubName is empty or whitespace
    }
  
    switch (clubName.toUpperCase()) {
      case "AKELA":
        return { logo: logo1, color: "#4e0044" }; // Example color
      case "CEROS":
        return { logo: logo2, color: "#60e58c" }; // Example color
      case "GRIZZLY":
        return { logo: logo3, color: "#6b6b6b" }; // Example color
      case "HYDRA":
        return { logo: logo4, color: "#ff0000" }; // Example color
      case "RAPTORS":
        return { logo: logo5, color: "#001eff" }; // Example color
      case "STAGS":
        return { logo: logo6, color: "#ff00d8" }; // Example color
      case "TUSKER":
        return { logo: logo7, color: "#ff7800" }; // Example color
      case "VALIENTE":
        return { logo: logo8, color: "#f6ff00" }; // Example color
      case "FALCON":
        return { logo: logo9, color: "#dc143c" }; // Example color
      case "SEAHAWK":
        return { logo: logo10, color: "#008080" }; // Example color
      case "PANTHER":
        return { logo: logo11, color: "#000000" }; // Example color
      case "PHOENIX":
        return { logo: logo12, color: "#33FF57" }; // Example color  
      default:
        return null;
    }
  }
  
export default getLogoByTeam;  