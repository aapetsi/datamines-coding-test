const getRespondersId = (questionId, responseId) => {
  let responders = new Array();
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

module.exports = getRespondersId;
