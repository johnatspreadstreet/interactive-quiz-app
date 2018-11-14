'use strict';

let questionNumber = 0;

function renderQuestion() {
    // This function will render a question on the page
    $("main").append(questionTemplate);
}

function activeButton() {
    // This function will add the 'active' class to a button
    $('.answers').click('button', function() {
        $('button').addClass('focus');
    });
}

function startQuiz() {
    // This function will start the quiz
    // When user clicks button, .intro is removed
    $(".start").click(function() {
        $(".intro").remove();
        renderQuestion();
        $("main").append(resultsTemplate);
        $("main").append(answersTemplate);
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
    activeButton();
    renderResults();
    renderAnswerPage();
    renderScorePage();
}

$(createQuiz);