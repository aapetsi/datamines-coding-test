import React, { Component } from "react";

class Answers extends Component {
  state = {
    value: "1"
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { answers, getResponseId } = this.props;
    const responseOptions = answers.map(response => (
      <option
        onClick={() => getResponseId(this.state.value)}
        value={response.id}
        key={response.id}
      >
        {response.option}
      </option>
    ));
    return (
      <div>
        <select onChange={this.onChange} name="" id="">
          {responseOptions}
        </select>
      </div>
    );
  }
}

export default Answers;
