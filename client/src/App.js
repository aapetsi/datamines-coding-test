import React from "react";
import axios from "axios";

import questions from "./resources/questions";
import answers from "./resources/answers";

class App extends React.Component {
  state = {
    questions,
    answers,
    questionId: "2",
    answerId: "1",
    numberOfResponders: ""
  };

  handleQuestionChange = e => {
    this.setState({ questionId: e.target.value, answerId: "1" });
  };

  handleAnswerChange = e => {
    this.setState({ answerId: e.target.value });
  };

  handleClick = e => {
    axios
      .get(
        `/questions/${this.state.questionId}/responses/${
          this.state.answerId
        }/responders`
      )
      .then(res => {
        let numberOfResponders = res.data.length;
        this.setState({ numberOfResponders });
      })
      .catch(err => console.log(err));
  };

  render() {
    const questionsSelection = this.state.questions.map(question => (
      <option value={question.id} key={question.id}>
        {question.questionDescription}
      </option>
    ));

    const filteredResponses = this.state.questions.filter(
      question => parseInt(this.state.questionId) === question.id
    )[0].responseOptions;

    const answersSelection = filteredResponses.map(response => (
      <option value={response.id} key={response.option}>
        {response.option}
      </option>
    ));

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Datamines Coding Assignment</h1>
        </div>
        <div className="app-card">
          <label>Select your question</label>
          <br />
          <select onChange={this.handleQuestionChange}>
            {questionsSelection}
          </select>
          <br />
          <label>Select your answer</label>
          <br />
          <select onChange={this.handleAnswerChange}>{answersSelection}</select>
          <br />
          <hr />
          <button className="btn btn-lg btn-danger" onClick={this.handleClick}>
            Get Responders
          </button>
          <div>
            <h3>
              Total number of users who selected this answer:{" "}
              {this.state.numberOfResponders}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
