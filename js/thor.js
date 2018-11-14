// 1) What is the name of Thor's enchanted hammer? Link	URL
// 2) Who is Thor's father?
// 3) In Norse mythology, what event was foretold to result in the death of Thor?
// 4) Which of Thor's comrades is the son of nine mothers?
// 5) Who was the first Marvel character outside of the Norse pantheon to be deemed worthy to wield Thor's hammer?
// 6) What is responsible for Thor's immortality?
// 7) What animals pull Thor's chariot?
// 8) What part of Thor's costume is enchanted?
// 9) What is the name of Thor's mortal love interest?
// 10) Thor was a founding member of what superhero team?

'use strict';

const THORSTORE = [
  {
    number: 1,
    text: '1) What is the name of Thor\'s enchanted hammer?',
    sel1: 'ASGARD',
    sel2: 'FENRIS',
    sel3: 'GUNGNIR',
    sel4: 'MJÖLNIR',
    ans: this.sel4,
    ansText: 'Mjölnir (literally "that which smashes") is depicted in Norse mythology as a fearsome weapon, capable of leveling mountains.'
  },

  {
    number: 2,
    text: '2) Who is Thor\'s father?',
    sel1: 'BALDER',
    sel2: 'ODIN',
    sel3: 'FENRIS',
    sel4: 'LOKI',
    ans: this.sel2,
    ansText: 'One of the most complex and enigmatic characters in Norse mythology, Odin is the one-eyed God of war and death, as well as wisdom and poetry. He is often accompanied by his animal companions--the wolves Geri and Freki and the ravens Huginn and Muninn, who bring him information from all over Midgard'
  },

  {
    number: 3,
    text: '3) In Norse mythology, what event was foretold to result in the death of Thor?',
    sel1: 'RAGNARÖK',
    sel2: 'SLEIPNIR',
    sel3: 'VALHALLA',
    sel4: 'YGGDRASIL',
    ans: this.sel1,
    ansText: 'Ragnarök is an important event in Norse mythology, and has been the subject of scholarly discourse and theory throughout the history of Germanic studies. The event is attested primarily in the Poetic Edda and foretells the death not only of Thor, but also of Odin, Tyr, Freyr, Heimdall, and Loki.'
  },

  {
    number: 4,
    text: '4) Which of Thor\'s comrades is the son of nine mothers?',
    sel1: 'FANDRAL',
    sel2: 'HEIMDALL',
    sel3: 'BALDER',
    sel4: 'VOLSTAGG',
    ans: this.sel2,
    ansText: 'In Norse mythology, the Nine Mothers of Heimdall are nine sisters who gave birth to the god Heimdall, the all-seeing and all-hearing guardian sentry of Asgard who keeps watch for the onset of Ragnarök.'
  },

  {
    number: 5,
    text: '5) What part of Thor\'s costume is enchanted?',
    sel1: 'HIS CAPE',
    sel2: 'HIS BOOTS',
    sel3: 'HIS HELMET',
    sel4: 'HIS BELT',
    ans: this.sel4,
    ansText: 'In Norse mythology, Megingjord is Thor\'s enchanted Belt of Strength. When worn, the belt doubles Thor\'s already legendary strength.'
  }
];

const questionTemplate = `
  <section class="question">
    <h1>${THORSTORE[0].text}</h1>
  </section>
    `;

const resultsTemplate = `
  <section class="results">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </section>
  `;

const answersTemplate = `
  <section class="answers">
    <form action="">
      <input class="selection" type="button" value="${THORSTORE[0].sel1}">
      <input class="selection" type="button" value="${THORSTORE[0].sel2}">
      <input class="selection" type="button" value="${THORSTORE[0].sel3}">
      <input class="selection" type="button" value="${THORSTORE[0].sel4}">
      <input class="selection" type="button" value="Submit">
    </form>
  </section>
`;

const submitDialogTemplate = `
  <section class="dialog">
    <p class="title">You got that right!</p>
    <p class="body">${THORSTORE[0].ansText}</p>
    <img src="img/mjolnir.jpg" alt="The mighty Mjolnir!">
    <button class="continue">Continue</button>
  </section>
`;