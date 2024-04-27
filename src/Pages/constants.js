import logo1 from "../Assets/akela.PNG";
import logo2 from "../Assets/ceros.PNG";
import logo3 from "../Assets/grizzly.PNG";
import logo4 from "../Assets/hydra.PNG";
import logo5 from "../Assets/raptors.PNG";
import logo6 from "../Assets/stags.PNG";
import logo7 from "../Assets/tusker.PNG";
import logo8 from "../Assets/valiente.PNG";

function getLogoByTeam(clubName) {
    if (!clubName || clubName.trim() === "") {
      return null; // Return null if clubName is empty or whitespace
    }
  
    switch (clubName.toUpperCase()) {
      case "AKELA":
        return { logo: logo1, color: "#FF5733" }; // Example color
      case "CEROS":
        return { logo: logo2, color: "#33FF57" }; // Example color
      case "GRIZZLY":
        return { logo: logo3, color: "#5733FF" }; // Example color
      case "HYDRA":
        return { logo: logo4, color: "#FF3357" }; // Example color
      case "RAPTORS":
        return { logo: logo5, color: "#57FF33" }; // Example color
      case "STAGS":
        return { logo: logo6, color: "#3357FF" }; // Example color
      case "TUSKER":
        return { logo: logo7, color: "#FF5733" }; // Example color
      case "VALIENTE":
        return { logo: logo8, color: "#33FF57" }; // Example color
      default:
        return null;
    }
  }
  
export default getLogoByTeam;  