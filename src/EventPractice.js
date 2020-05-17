import React from "react";
export default class EventPractice extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      message: "",
    };
  }
  render() {
    return (
      <div>
        <h1>EventPractice</h1>
        <input
          type="text"
          name="message"
          placeholder="입력란"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        ></button>
      </div>
    );
  }
}
