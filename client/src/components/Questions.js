import React, { Component } from "react";

class Questions extends Component {
  state = {
    value: "2"
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { questions } = this.props;

    const questionOptions = questions.map(question => {
      return (
        <option
          onClick={() => this.props.getQuestionId(this.state.value)}
          value={question.id}
          key={question.id}
        >
          {question.questionDescription}
        </option>
      );
    });

    return (
      <div>
        <select onChange={this.onChange} name="" id="">
          {questionOptions}
        </select>
      </div>
    );
  }
}

export default Questions;
