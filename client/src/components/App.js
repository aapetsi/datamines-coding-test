import React, { Component } from "react";
import axios from "axios";

import questions from "../resources/questions";
import answers from "../resources/answers";

import Answers from "./Answers";
import Questions from "./Questions";

class App extends Component {
  state = {
    questions,
    answers,
    questionId: 2,
    responseId: 1,
    numberOfResponders: ""
  };

  getQuestionId = questionId => {
    this.setState({ questionId, responseId: 1 });
  };

  getResponseId = responseId => {
    this.setState({ responseId });
  };

  onClick = e => {
    axios
      .get(
        `http://localhost:3000/questions/${this.state.questionId}/responses/${
          this.state.responseId
        }/responders`
      )
      .then(res => {
        let numberOfResponders = res.data.length;
        this.setState({ numberOfResponders });
      })
      .catch(err => console.log(err));
  };

  render() {
    const filterQuestions = this.state.questions.filter(question => {
      return question.id === parseInt(this.state.questionId);
    });
    const filteredResponseOptions = filterQuestions[0].responseOptions;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Datamines Coding Assignment</h1>
        </div>
        <div className="app-card">
          <label htmlFor="question">Select your question</label>
          <br />

          <Questions
            getQuestionId={this.getQuestionId}
            questions={this.state.questions}
          />

          <br />
          <label htmlFor="answer">Select your answer</label>
          <br />

          <Answers
            getResponseId={this.getResponseId}
            answers={filteredResponseOptions}
          />
          <br />

          <button className="btn btn-secondary btn-lg" onClick={this.onClick}>
            Get Responders
          </button>

          <div>
            <p>
              Total number of users with the selected response:{" "}
              <span>{this.state.numberOfResponders}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
