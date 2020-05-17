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

## constructor()

- 컴포넌트의 생성자메서드
- 일반적으로 constructor메소드를 만들지 않으면
  Component클래스의 생성재메소드를 그대로 사용한다.
  super(...)를 사용하는 것은 부모클래스 호출 후 추가작업을 위해서이다.
