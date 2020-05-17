import React from "react";

export default class MyComponent extends React.Component {
  static defaultProps = {
    name: "기본리음",
  };
  render() {
    return (
      <div>
        <h1>안녕하세요 제이름은 {this.props.name}입니다.</h1>
      </div>
    );
  }
}
