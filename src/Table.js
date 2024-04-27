import Table from "react-bootstrap/Table";
import logo1 from "./Assets/akela.PNG";
import logo2 from "./Assets/ceros.PNG";
import logo3 from "./Assets/grizzly.PNG";
import logo4 from "./Assets/hydra.PNG";
import logo5 from "./Assets/raptors.PNG";
import logo6 from "./Assets/stags.PNG";
import logo7 from "./Assets/tusker.PNG";
import logo8 from "./Assets/valiente.PNG";

function SmallExample() {
  return (
    <Table bordered variant="dark" size="sm">
      <thead>
        <tr>
          <th style={{ width: "40px" }}>Pos</th>
          <th style={{ width: "200px" }}>Name</th>
          <th style={{ width: "40px" }}>P</th>
          <th style={{ width: "40px" }}>W</th>
          <th style={{ width: "40px" }}>D</th>
          <th style={{ width: "40px" }}>L</th>
          <th style={{ width: "40px" }}>F</th>
          <th style={{ width: "40px" }}>A</th>
          <th style={{ width: "40px" }}>+/-</th>
          <th style={{ width: "40px" }}>PTS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo1}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#6b2e7d",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Akela
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo2}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#34ed5c",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Ceros
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>3</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo3}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#546357",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Grizzly
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>4</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo4}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#db6b0f",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Hydra
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>5</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo5}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#1a20d9",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Raptors
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>6</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo6}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#cf0dd6",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Stags
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>7</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo7}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#cfe627",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Tusker
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>8</td>
          <td style={{ fontSize: "30px" }}>
            <img
              src={logo8}
              style={{
                width: "50px",
                marginRight: "30px",
                backgroundColor: "#eb1c23",
                borderRadius: "50px",
                padding: "5px",
              }}
              alt="Logo"
            />
            Valiente
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;
