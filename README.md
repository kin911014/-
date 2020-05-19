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
- state는 render이전에 값을 세팅하는 곳
  rendering이후 값을 변환하기 위해서는 setState함수를 이용한다.
- 다음과 같이 사용해선 안된다
  this.state.number = this.state.number+1;
  this.state.someArray.push(3);
  this.state.someObject.value=3;
  !항상 setState에서 함수를 변환할 것

## event handling(p 90~)

- 정의: 유저가 웹브라우저에서 DOM요소들과 상호작용 하는 것을 event라고 한다.
- 사용시 주의사항

  1. 이벤트이름은 camelCase로 사용
  2. 이벤트에서 실행할 자바스크립트 코드를 전달하는 것이 아니라
     함수 형태의 값을 전달
     <pre>
       ex)
       <button
            onClick={() => {
              this.setState({
                number: this.state.number + 1,
              });
            }}
          >
            더하기
          </button>
     
          예외로 <MyComponent onClick={this.props.OnClick}>와 같이
          전달받은 props를 컴포넌트 내부 이벤트로 설정은 가능
     </pre>

  3. DOM요소에만 이벤트 설정 가능
  4. 이벤트 종류(p92~93 참고)
  5. onChange

## arrow function

- 함수를 파라미터로 전달할때 유용.
  일반 function과 arrowfunction은 용도가 다르다 (ex/ 가리키는 this의 값이 다르다)

1.  일반함수는 자신이 종속된 객체를 this로 표현, 화살표함수는 자신이 종속된 인스턴스를 가리킨다.

## event handling

- change event

  <pre>
    handleChange = (e) => {
    console.log(e.target);
    this.setState({
    [e.target.name]: e.target.value,
    });
    };에서 [e.target.name]은 input의 name의 value에 e.target.value를 사용한다는 것!
  </pre>

- onKeyPress event handling

## ref

- reference의 줄임말
- 아래에서 success와 failure 둘중하나 클래스name이 결정됨에 따라 css가 다르게 적용가능
<pre>
        <input
         type="password"
         value={this.state.password}
         onChange={this.handleChange}
         className={
           this.state.clicked
             ? this.state.validated
               ? "success"
               : "failure"
             : ""
         }
       />
  </pre>

- state만으로 해결못하는 경우는 ref사용할것

1. 특정 input에 포커스주기

- input에 ref를 설정해주고 함수에서 focus를 설정해주면 input에 포커스가 넘어간다.
<pre>
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

render() {
return (

<div>
<input
ref={(ref) => (this.input = ref)} />
}

</pre>
2. 스크롤 박스 조작
  - 컴포넌트에 ref를 설정하는 것으로 주로 컴포넌트 내부에 있는 DOM을 외부에서 사용할 때 사용.
  
<pre>
  <MyComponent ref={(ref)=>{this.MyComponent =ref}}>
</pre>
<pre></pre>
3. canvas 요소에 그림그리기
