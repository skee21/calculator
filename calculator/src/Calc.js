import React from "react";
import { NumButton } from "./NumButton";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateNum = this.updateNum.bind(this);
  }
  updateNum = num => {
    const { value } = this.state;
    const updated = value * 10 + num;
    this.setState({ num1: updated, value: updated });
  };
  render() {
    const { updateNum } = this;
    const numButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3].map(val => (
      <NumButton key={val} value={val} onClick={updateNum} />
    ));
    return (
      <div className="calc-container">
        <div id="output">{this.state.value}</div>
        <div>
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input type="button" value="/" />
        </div>
        <div>
          {numButtons.slice(0, 3)}
          <input type="button" value="x" />
        </div>
        <div>
          {numButtons.slice(3, 6)}
          <input type="button" value="-" />
        </div>
        <div>
          {numButtons.slice(6, 9)}
          <input type="button" value="+" />
        </div>
        <div>
          <NumButton style={{ width: 64 }} value={0} onClick={updateNum} />
          <input type="button" value="." />
          <input type="button" value="=" />
        </div>
      </div>
    );
  }
}
