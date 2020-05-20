import React from "react";

export default class IterationSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["미국", "러시아", "일본", "한국"],
      name: "",
    };
  }

  InputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addChange = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
    });
  };

  handleRemove = (index) => {
    const { names } = this.state;

    this.setState({
      // ...뒤에 위치한 배열값을 그대로 꺼내서 새로운 배열에 복사하는 것
      names: [
        ...names.slice(0, index), // 일본을 지울 경우, index는 2이며 0부터 1까지 복사된다.
        ...names.slice(index + 1, names.length), // index+1로 3이되고, 한국이 추가된다.
      ],
    });
  };

  render() {
    {
      /* 속성값에 arrowfunction 질문하기 */
    }
    const nameList = this.state.names.map((name, index) => (
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {name}
      </li>
    ));
    return (
      <div>
        <input value={this.state.name} onChange={this.InputChange}></input>
        <button onClick={this.addChange}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}
