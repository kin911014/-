import React from "react";

export default class ScrollBox extends React.Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
    // scrollTop: 세로 스크롤바 위치(0~350)
    // scrollHeight: 스크롤 박스 내부의 높이(650)
    // clientHeight: 스크롤박스 외부의 높이 (350)
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    // innertext의 height가 더 길이가 길어서 스크롤바가 생성됨
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}
