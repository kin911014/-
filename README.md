# 리액트를 다루는 기술

## props 기본값 설정방법

<pre>
import React from "react";

export default class MyComponent extends React.Component {
  static defaultProps = {
    name: "기본이름",
  };
  render() {
    return (
      <div>
        <h1>안녕하세요 제이름은 {this.props.name}입니다.</h1>
      </div>
    );
  }
}

</pre>

## react code snippets 설정방법

## propTypes

- 필수 속성을 설정하거나, 타입을 강제할 때 사용.
- 종류는 여러가지가 있으니, 책의 80~81p 참고
