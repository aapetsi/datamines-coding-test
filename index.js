const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Cors middleware
app.use(cors());

const questions = [
  {
    questionDescription: "How old are you?",
    id: 2,
    responseOptiions: [
      {
        option: "13 - 17",
        id: 1
      },
      {
        option: "25-50",
        id: 2
      }
    ]
  },
  {
    questionDescription: "Where do you live?",
    id: 3,
    responseOptions: [
      {
        option: "Accra",
        id: 1
      },
      {
        option: "Tema",
        id: 2
      },
      {
        option: "Other",
        id: 3
      }
    ]
  }
];

const answers = [
  {
    responderId: 41,
    responses: [
      {
        questionId: 2,
        responseId: 2
      },
      {
        questionId: 3,
        responseId: 1
      }
    ]
  },
  {
    responderId: 25,
    responses: [
      {
        questionId: 2,
        responseId: 1
      },
      {
        questionId: 3,
        responseId: 1
      }
    ]
  }
];

app.get(
  "/questions/:questionId/responses/:responseId/responders",
  (req, res) => {
    const questionId = parseInt(req.params.questionId);
    const responseId = parseInt(req.params.responseId);
    const respondersId = getRespondersId(questionId, responseId);

    res.send(respondersId);
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

// function to get responders with the given questionId
const getRespondersId = (questionId, responseId) => {
  let responders = [];
  answers.forEach(answer => {
    answer.responses.forEach(response => {
      if (
        response.questionId === parseInt(questionId) &&
        response.responseId === parseInt(responseId)
      ) {
        responders.push(answer.responderId);
      }
    });
  });
  return responders;
};

module.exports.app = app;
