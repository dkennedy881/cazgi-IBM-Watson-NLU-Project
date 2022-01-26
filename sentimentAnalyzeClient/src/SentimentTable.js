import React from "react";
import "./bootstrap.min.css";

class SentimentTable extends React.Component {
  setColor = (label) => {
    let color = "white";
    switch (label) {
      case "positive":
        color = "green";
        break;
      case "negative":
        color = "red";
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
              Object.entries(this.props.sentiments).map((entry) => (
                <tr>
                  <td>{entry[0]}</td>
                  <td style={{ color: this.setColor(entry[1]) }}>
                    {" "}
                    {entry[1]}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default SentimentTable;
