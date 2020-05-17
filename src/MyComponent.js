import React from "react";
import PropTypes from "prop-types";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>안녕하세요 제이름은 {this.props.name}입니다.</h1>
        <br />
        <h1>나이는 {this.props.age}살 입니다. </h1>
      </div>
    );
  }
}
MyComponent.propTypes = {
  name: PropTypes.string, // name props타입을 문자열로 설정
};
