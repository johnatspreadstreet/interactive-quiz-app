'use strict';

let questionNumber = 0;

function renderQuestion() {
  // This function will render a question on the page
  $('main').append(questionTemplate);
}

function makeFocus(element) {
  // Will make the clicked element have a class of focus
  $(element).click(function() {
    $(element).toggleClass('focus');
  });
}

function startQuiz() {
  // This function will start the quiz
  // When user clicks button, .intro is removed
  $('.start').click(function() {
    $('.intro').remove();
    renderQuestion();
    $('main').append(resultsTemplate);
    $('main').append(answersTemplate);
  });
}

function userSelectAnswer() {
  // User will be able to select an answer
  // Submit button will become active after selection
  $('main').on('click', '.selection', function() {
    makeFocus($(this));
  });
}

function renderResults() {
  // This function will render possible selections for a question
  console.log('`renderSelections` ran');
}

function renderAnswerPage() {
  // This function will render the answer page
  console.log('`renderAnswerPage` ran');
}

function renderScorePage() {
  // After user is finished, they will get the Score Page, which details their score
  console.log('`renderScorePage` ran');
}

function createQuiz() {
  startQuiz();
  makeFocus();
  userSelectAnswer();
  renderResults();
  renderAnswerPage();
  renderScorePage();
}

$(createQuiz);