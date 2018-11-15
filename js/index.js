'use strict';

let questionNumber = 0;
let score = 0;

function iterateQuestion() {
  questionNumber++;
}

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
    sel1pic: 'img/asgard.jpg'
  },

  {
    number: 2,
    text: '2) Who is Thor\'s father?',
    sel1: 'BALDER',
    sel2: 'ODIN',
    sel3: 'FENRIS',
    sel4: 'LOKI',
    ans: 'ODIN',
    ansText: 'One of the most complex and enigmatic characters in Norse mythology, Odin is the one-eyed God of war and death, as well as wisdom and poetry. He is often accompanied by his animal companions--the wolves Geri and Freki and the ravens Huginn and Muninn, who bring him information from all over Midgard'
  },

  {
    number: 3,
    text: '3) In Norse mythology, what event was foretold to result in the death of Thor?',
    sel1: 'RAGNARÖK',
    sel2: 'SLEIPNIR',
    sel3: 'VALHALLA',
    sel4: 'YGGDRASIL',
    ans: 'RAGNARÖK',
    ansText: 'Ragnarök is an important event in Norse mythology, and has been the subject of scholarly discourse and theory throughout the history of Germanic studies. The event is attested primarily in the Poetic Edda and foretells the death not only of Thor, but also of Odin, Tyr, Freyr, Heimdall, and Loki.'
  },

  {
    number: 4,
    text: '4) Which of Thor\'s comrades is the son of nine mothers?',
    sel1: 'FANDRAL',
    sel2: 'HEIMDALL',
    sel3: 'BALDER',
    sel4: 'VOLSTAGG',
    ans: 'HEIMDALL',
    ansText: 'In Norse mythology, the Nine Mothers of Heimdall are nine sisters who gave birth to the god Heimdall, the all-seeing and all-hearing guardian sentry of Asgard who keeps watch for the onset of Ragnarök.'
  },

  {
    number: 5,
    text: '5) What part of Thor\'s costume is enchanted?',
    sel1: 'HIS CAPE',
    sel2: 'HIS BOOTS',
    sel3: 'HIS HELMET',
    sel4: 'HIS BELT',
    ans: 'HIS BELT',
    ansText: 'In Norse mythology, Megingjord is Thor\'s enchanted Belt of Strength. When worn, the belt doubles Thor\'s already legendary strength.'
  }
];

function questionTemplate() {
  let questionTemplate = `
    <section class="question container">
      <h1>${THORSTORE[questionNumber].text}</h1>
    </section>

    <div class='picture-select closed'>
      <img src="${THORSTORE[questionNumber].sel1pic}" alt="">
    </div>

    <footer>
      <form class="form container" action="">
          <div class="inputGroup">
              <input id="radio1" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel1}">
              <label class="button-label" for="radio1">${THORSTORE[questionNumber].sel1}</label>
          </div>
          <div class="inputGroup">    
              <input id="radio2" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel2}">
              <label class="button-label" for="radio2">${THORSTORE[questionNumber].sel2}</label>
          </div>
          <div class="inputGroup">    
              <input id="radio3" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel3}">
              <label class="button-label" for="radio3">${THORSTORE[questionNumber].sel3}</label>
          </div>
          <div class="inputGroup">        
              <input id="radio4" class="hidden selection" type="radio" name="sel" value="${THORSTORE[questionNumber].sel4}">
              <label class="button-label" for="radio4">${THORSTORE[questionNumber].sel4}</label>
          </div>
          <input id="" class="submit-button" type="submit" name="Submit" value="Submit" disabled>
      </form>
    </footer>
    `;
  return questionTemplate;
}

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

const submitDialogTemplateCorrect = `
    <section>
        <div class="modal" id="modal" style="background-image: url('img/question-correct.gif'); background-size: contain; background-repeat: no-repeat;">
          <div class="modal-guts">
            <p class="title">You got that right!</p>
            <p class="body">${THORSTORE[questionNumber].ansText}</p>
            <button class="continue">Continue</button>
          </div>
        </div>
        <div class="modal-overlay" id="modal-overlay closed"></div>
    </section>
`;

const submitDialogTemplateIncorrect = `
    <section>
        <div class="modal">
            <p class="title">You got that wrong :(</p>
            <p class="body">${THORSTORE[questionNumber].ansText}</p>
            <img src="" alt="The mighty Mjolnir!">
            <button class="continue">Continue</button>
            <img src="img/question-wrong.gif" alt="Thor incorrect...maybe next time!">
        </div>
        <div class="modal-overlay" id="modal-overlay closed"></div>
    </section>
`;

function renderQuestion() {
  // This function will render a question on the page
  $('main').append(questionTemplate());
}

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

function userSelectAnswer() {
  // User will be able to select an answer
  // Submit button will become active after selection
  $('main').on('change', 'input', function() {
    $('main input.submit-button').removeAttr('disabled');
    $('main').find('div').removeClass('closed');
  });
}

function userSubmitAnswer() {
  $('main').on('click', 'input.submit-button', function(e) {
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
  $('main').append(submitDialogTemplateCorrect);
  score++;
}

function ifAnswerIsIncorrect() {
  // Handles the modal changes for if the answer is incorrect
  let findQuestion = `.q${questionNumber+1}`;
  $(findQuestion).removeClass('current');
  $(findQuestion).addClass('no');
  $('main').append(submitDialogTemplateIncorrect);
}

function advanceQuestion() {
  $('main').on('click', '.continue', function(e) {
    e.preventDefault();
    $('.modal').addClass('closed');
    $('.modal-overlay').addClass('closed');
    iterateQuestion();
    let findQuestion = `.q${questionNumber+1}`;
    $(findQuestion).addClass('current');
    if (questionNumber === 5) {
      renderScorePage(score);
    } else {
      $('main').empty();
      $('main').html(renderQuestionPage());
    }
    console.log(score);
  });
}

function renderScorePage(score) {
  // After user is finished, they will get the Score Page, which details their score
  let results =  `    
    <section class="container">
        <h1>Final Score: ${score} out of ${THORSTORE.length}</h1>
        <h3>You should definitely play again!</h3>
        <button class='play-again'>Play Again</button>
    </section>
    `;
  $('main').empty();
  $('main').html(results);
  console.log('`renderScorePage` ran');
}

function restartQuiz() {
  $('main').on('click', 'button.play-again', function() {
    questionNumber = 0;
    score = 0;
    $('main').empty();
    $('main').html(renderQuestionPage());
  });
}

function createQuiz() {
  startQuiz();
  makeFocus();
  userSelectAnswer();
  userSubmitAnswer();
  advanceQuestion();
  restartQuiz();
}

$(createQuiz);