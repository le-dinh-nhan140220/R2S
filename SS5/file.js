var questionList = document.getElementById("question-list");

for (var i = 0; i < myQuestions.length; i++) {
    var questionContainer = document.createElement("div");
    var question = document.createElement("h3");
    question.textContent = "Question " + (i + 1) + ": " + myQuestions[i].question;

    var answerList = document.createElement("ul");
    var answers = myQuestions[i].answers;
    for (var key in answers) {
        var listItem = document.createElement("li");
        listItem.textContent = answers[key];
        answerList.appendChild(listItem);
    }

    questionContainer.appendChild(question);
    questionContainer.appendChild(answerList);
    questionList.appendChild(questionContainer);
}