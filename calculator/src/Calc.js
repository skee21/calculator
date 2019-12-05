import React from "react";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  render() {
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
          <input type="button" value={7} />
          <input type="button" value={8} />
          <input type="button" value={9} />
          <input type="button" value="x" />
        </div>
        <div>
          <input type="button" value={4} />
          <input type="button" value={5} />
          <input type="button" value={6} />
          <input type="button" value="-" />
        </div>
        <div>
          <input type="button" value={1} />
          <input type="button" value={2} />
          <input type="button" value={3} />
          <input type="button" value="+" />
        </div>
        <div>
          <input type="button" style={{ width: 64 }} value={0} />
          <input type="button" value="." />
          <input type="button" value="=" />
        </div>
      </div>
    );
  }
}
