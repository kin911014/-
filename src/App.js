import React from "react";
// import MyComponent from "./MyComponent";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <EventPractice /> */}
        {/* <MyComponent name="땅히" age={27} /> */}
        {/* <ValidationSample /> */}
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}
