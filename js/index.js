'use strict';

let questionNumber = 0;
let score = 0;
const main = $('main');

// Increases the questionNumber to move to the next index in THORSTORE
function iterateQuestion() {
  questionNumber++;
}

// Contains the entire dataset for the quiz
const THORSTORE = [
  {
    number: 1,
    text: '1) What is the name of Thor\'s enchanted hammer?',
    sel1: 'ASGARD',
    sel2: 'FENRIS',
    sel3: 'GUNGNIR',
    sel4: 'MJÖLNIR',
    ans: 'MJÖLNIR',
    ansText: 'Mjölnir (literally "that which smashes") is depicted in Norse mythology as a fearsome weapon, capable of leveling mountains.',
    sel1pic: 'img/asgard.jpg',
    sel2pic: 'img/fenris.png',
    sel3pic: 'img/gungnir.png',
    sel4pic: 'img/mjolnir.png'
  },

  {
    number: 2,
    text: '2) Who is Thor\'s father?',
    sel1: 'BALDER',
    sel2: 'ODIN',
    sel3: 'FENRIS',
    sel4: 'LOKI',
    ans: 'ODIN',
    ansText: 'One of the most complex and enigmatic characters in Norse mythology, Odin is the one-eyed God of war and death, as well as wisdom and poetry. He is often accompanied by his animal companions--the wolves Geri and Freki and the ravens Huginn and Muninn, who bring him information from all over Midgard',
    sel1pic: 'img/balder.gif',
    sel2pic: 'img/odin.png',
    sel3pic: 'img/fenris.png',
    sel4pic: 'img/loki.png'
  },

  {
    number: 3,
    text: '3) What event foretold Thor\'s death?',
    sel1: 'RAGNARÖK',
    sel2: 'SLEIPNIR',
    sel3: 'VALHALLA',
    sel4: 'YGGDRASIL',
    ans: 'RAGNARÖK',
    ansText: 'Ragnarök is an important event in Norse mythology. The event is attested primarily in the Poetic Edda and foretells the death not only of Thor, but also of Odin, Tyr, Freyr, Heimdall, and Loki.',
    sel1pic: 'img/ragnarok.png',
    sel2pic: 'img/sleipnir.png',
    sel3pic: 'img/valhalla.jpg',
    sel4pic: 'img/yggdrasil.png'
  },

  {
    number: 4,
    text: '4) Which of Thor\'s comrades is the son of nine mothers?',
    sel1: 'FANDRAL',
    sel2: 'HEIMDALL',
    sel3: 'BALDER',
    sel4: 'VOLSTAGG',
    ans: 'HEIMDALL',
    ansText: 'In Norse mythology, the Nine Mothers of Heimdall are nine sisters who gave birth to the god Heimdall, the all-seeing and all-hearing guardian sentry of Asgard who keeps watch for the onset of Ragnarök.',
    sel1pic: 'img/fandral.png',
    sel2pic: 'img/heimdall.png',
    sel3pic: 'img/balder.gif',
    sel4pic: 'img/volstagg.png'
  },

  {
    number: 5,
    text: '5) What part of Thor\'s costume is enchanted?',
    sel1: 'HIS CAPE',
    sel2: 'HIS BOOTS',
    sel3: 'HIS HELMET',
    sel4: 'HIS BELT',
    ans: 'HIS BELT',
    ansText: 'In Norse mythology, Megingjord is Thor\'s enchanted Belt of Strength. When worn, the belt doubles Thor\'s already legendary strength.',
    sel1pic: 'img/cape.png',
    sel2pic: 'img/boots.png',
    sel3pic: 'img/helmet.png',
    sel4pic: 'img/belt.png'
  }
];

// Template design for questions. Updates certain attributes based on question number
function questionTemplate() {
  let questionTemplate = `
    <section class="question container">
      <h1>${THORSTORE[questionNumber].text}</h1>
    </section>

    <div class='main picture-select closed'>
      <img id="radio-pic" src="${THORSTORE[questionNumber].sel4pic}" alt="">
    </div>


    <footer>
      <form action="">
        <fieldset>
          <input id="radio1" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel1}">
          <label class="button-label" for="radio1">${THORSTORE[questionNumber].sel1}</label>
          <input id="radio2" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel2}">
          <label class="button-label" for="radio2">${THORSTORE[questionNumber].sel2}</label>
          <input id="radio3" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel3}">
          <label class="button-label" for="radio3">${THORSTORE[questionNumber].sel3}</label>
          <input id="radio4" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel4}">
          <label class="button-label" for="radio4">${THORSTORE[questionNumber].sel4}</label>
        </fieldset>
        <input id="" class="submit-button button-label-submit" type="submit" name="Submit" value="Submit" disabled>
      </form>
    </footer>
    `;
  return questionTemplate;
}

// Fixed results sidebar to show user what question they are on
function resultsTemplate() {
  let resultsTemplate = `
    <section class="results">
        <ul>
            <div class="progress q1 current">Q1</div>
            <div class="progress q2 all">Q2</div>
            <div class="progress q3 all">Q3</div>
            <div class="progress q4 all">Q4</div>
            <div class="progress q5 all">Q5</div>
        </ul>
    </section>
  `;
  return resultsTemplate;
}

// Modal display if user correctly answers the question
function submitDialogTemplateCorrect() {
  const submitDialogTemplateCorrect = `
      <section>
          <div class="modal" id="modal">
            <div class="modal-guts">
              <h1 class="title">You got that <span class="right">right!</span></h1>
              <p class="body">${THORSTORE[questionNumber].ansText}</p>
              <div class="container">
                <img class"modal-img" src="img/question-correct.gif" alt="">
                <button class="continue button-label-submit">Continue</button>
              </div>
            </div>
          </div>
          <div class="modal-overlay" id="modal-overlay closed"></div>
      </section>
  `;
  return submitDialogTemplateCorrect;
}

// Modal display if user incorrectly answers the question
function submitDialogTemplateIncorrect() {
  const submitDialogTemplateIncorrect = `
    <section>
      <div class="modal" id="modal">
        <div class="modal-guts">
          <h1 class="title">You got that <span class="wrong">wrong!</span></h1>
          <p class="body">${THORSTORE[questionNumber].ansText}</p>
          <div class="container">
            <img src="img/question-wrong.gif" alt="">
            <button class="continue button-label-submit">Continue</button>
          </div>
        </div>
      </div>
      <div class="modal-overlay" id="modal-overlay closed"></div>
    </section>
  `;
  return submitDialogTemplateIncorrect;
}

// Renders the questionTemplate on the screen
function renderQuestion() {
  // This function will render a question on the page
  main.append(questionTemplate());
}

// Runs the renderQuestion function...might need changing in refactor
function renderQuestionPage() {
  renderQuestion();
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
    $('.intro').empty();
    renderQuestionPage();
  });
}

// Changes the picture on the screen depending upon which selection the user makes
function changeSelectionPicture() {
  main.on('change', 'input:radio[name=sel]:checked', function() {
    let inputVal = $('input:radio[name=sel]:checked').attr('id');
    let sel1pic = `${THORSTORE[questionNumber].sel1pic}`;
    let sel2pic = `${THORSTORE[questionNumber].sel2pic}`;
    let sel3pic = `${THORSTORE[questionNumber].sel3pic}`;
    let sel4pic = `${THORSTORE[questionNumber].sel4pic}`;
    return (inputVal === 'radio1') ? main.find($('#radio-pic')).attr('src', sel1pic)
    : (inputVal === 'radio2') ? main.find($('#radio-pic')).attr('src', sel2pic)
    : (inputVal === 'radio3') ? main.find($('#radio-pic')).attr('src', sel3pic)
    : main.find($('#radio-pic')).attr('src', sel4pic);
  });
}

function userSelectAnswer() {
  // User will be able to select an answer
  // Submit button will become active after selection
  // Selection picture will be updated on the screen
  main.on('change', 'input', function() {
    $('main input.submit-button').removeAttr('disabled');
    main.find('div').removeClass('closed');
    changeSelectionPicture();
  });
}

function userSubmitAnswer() {
  // User will be able to submit an answer
  // If the answer is correct, run the ifAnswerIsCorrect() function, otherwise run Incorrect
  main.on('click', 'input.submit-button', function(e) {
    e.preventDefault();
    let radioValue = $('input:checked').attr('value');
    let correctAnswer = `${THORSTORE[questionNumber].ans}`;
    if (radioValue === correctAnswer) {
      ifAnswerIsCorrect();
    } else {
      ifAnswerIsIncorrect();
    }
  });
}

function ifAnswerIsCorrect() {
  // Handles the modal changes for if the answer is correct
  let findQuestion = `.q${questionNumber+1}`;
  console.log(findQuestion);
  $(findQuestion).removeClass('current');
  $(findQuestion).addClass('yes');
  main.append(submitDialogTemplateCorrect());
  score++;
}

function ifAnswerIsIncorrect() {
  // Handles the modal changes for if the answer is incorrect
  let findQuestion = `.q${questionNumber+1}`;
  $(findQuestion).removeClass('current');
  $(findQuestion).addClass('no');
  main.append(submitDialogTemplateIncorrect());
}

function advanceQuestion() {
  // User should be able to advance to the next question
  // Iterates to the next question
  // If question number is === 5, then render the score page...otherwise keep going
  main.on('click', '.continue', function(e) {
    e.preventDefault();
    $('.modal').addClass('closed');
    $('.modal-overlay').addClass('closed');
    iterateQuestion();
    let findQuestion = `.q${questionNumber+1}`;
    $(findQuestion).addClass('current');
    if (questionNumber === 5) {
      renderScorePage(score);
    } else {
      main.empty();
      main.html(renderQuestionPage());
    }
    console.log(score);
  });
}

function renderScorePage(score) {
  // After user is finished, they will get the Score Page, which details their score
  let results =  `    
    <section class="final-results">
      <div class="">
        <header class=""><h1>Final Score: ${score} out of ${THORSTORE.length}</h1></header>
        <div class=""><h2>You should definitely play again!</h2></div>
        <div class="footer"><button class='play-again button'>Play Again</button></div>
      </div>
    </section>
    `;
  main.empty();
  main.html(results);
  console.log('`renderScorePage` ran');
}

function restartQuiz() {
  // User should be able to restart the quiz
  main.on('click', 'button.play-again', function() {
    questionNumber = 0;
    score = 0;
    main.empty();
    $('section').empty();
    main.html(renderQuestionPage());
    $('body').append(resultsTemplate());
  });
}

function createQuiz() {
  startQuiz();
  makeFocus();
  changeSelectionPicture();
  userSelectAnswer();
  userSubmitAnswer();
  advanceQuestion();
  restartQuiz();
}

$(createQuiz);