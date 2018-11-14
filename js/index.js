'use strict';

function renderStartPage() {
    // This function is used to render the first page
    console.log('`renderStartPage` ran');
}

function startQuiz() {
    // This function will start the quiz
    console.log('`startQuiz` ran');
}

function renderQuestionPage() {
    // This function will start the rendering of the question template
    console.log('`renderQuestionPage` ran');
}

function renderQuestion() {
    // This function will render a question on the page
    console.log('`renderQuestion` ran');
}

function renderSelections() {
    // This function will render possible selections for a question
    console.log('`renderSelections` ran');
}

function renderSelectionImage() {
    // This function will render an image based on a users selection
    console.log('`renderSelectionImage` ran');
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
    renderStartPage();
    startQuiz();
    renderQuestionPage();
    renderQuestion();
    renderSelections();
    renderSelectionImage();
    renderAnswerPage();
    renderScorePage();
}

$(createQuiz);