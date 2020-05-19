import React from "react";
export default class EventPractice extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      username: "",
      message: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      message: "",
      username: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>EventPractice</h1>
        <input
          type="text"
          name="message"
          placeholder="입력란"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
