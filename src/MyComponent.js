import React from "react";
import PropTypes from "prop-types";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 643,
    };
  }
  render() {
    return (
      <div>
        <h1>안녕하세요 제이름은 {this.props.name}입니다.</h1>
        <h1>나이는 {this.props.age}살 입니다. </h1>
        <h1>동은이와 사귄 날짜는 {this.state.number}일째 입니다.</h1>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          더하기
        </button>
      </div>
    );
  }
}
MyComponent.propTypes = {
  name: PropTypes.string, // name props타입을 문자열로 설정
};
