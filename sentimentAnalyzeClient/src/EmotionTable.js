import React from "react";
import "./bootstrap.min.css";

class EmotionTable extends React.Component {
  setColor = (label) => {
    let color = "white";
    switch (label) {
      case "positive":
        color = "green";
        break;
      case "negative":
        color = "red";
        break;

      case "sadness":
        color = "blue";
        break;

      case "joy":
        color = "pink";
        break;

      case "fear":
        color = "grey";
        break;

      case "disgust":
        color = "orange";
        break;

      case "anger":
        color = "#454545";
        break;

      default:
        color = "black";
    }
    console.log(label);
    return color;
  };
  render() {
    //Returns the emotions as an HTML table
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              Object.entries(this.props.emotions).map((entry) => (
                <tr>
                  <td style={{ color: this.setColor(entry[0]) }}>{entry[0]}</td>
                  <td>{entry[1]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmotionTable;
