'use strict';

const questions = [
  '1) Captain America made his first appearance in what comic book?',
  '2) Who created Captain America?',
  '3) What is Captain America\'s secret identity?',
  '4) Who was Captain America\'s sidekick during World War II?',
  '5) What team of superheroes discovered Captain America\'s body frozen in a block of ice in 1964?',
  '6) For a brief period during the 1970s, disillusioned by U.S. politics, Captain America changed his name to ...?',
  '7) What was the original shape of Captain America\'s shield?',
  '8) What villain did Captain America and Bucky fight in the very first issue of Captain America Comics?',
  '9) When Bucky was wounded in combat, who became Captain America\'s new sidekick?',
  '10) Who played the title role in the 1979 TV movie Captain America?'
];



const CAPSTORE = [
  {
    number: 1,
    text: '1) Captain America made his first appearance in what comic book?',
    sel1: 'ASGARD',
    sel2: 'FENRIS',
    sel3: 'GUNGNIR',
    sel4: 'MJÖLNIR',
    ans: this.sel4
  },

  {
    number: 2,
    text: '2) Who is Thor\'s father?',
    sel1: 'BALDER',
    sel2: 'ODIN',
    sel3: 'FENRIS',
    sel4: 'LOKI',
    ans: this.sel2
  },

  {
    number: 3,
    text: '3) In Norse mythology, what event was foretold to result in the death of Thor?',
    sel1: 'RAGNARÖK',
    sel2: 'SLEIPNIR',
    sel3: 'VALHALLA',
    sel4: 'YGGDRASILL',
    ans: this.sel1
  },

  {
    number: 4,
    text: '4) Which of Thor\'s comrades is the son of nine mothers?',
    sel1: 'FANDRAL',
    sel2: 'HEIMDALL',
    sel3: 'BALDER',
    sel4: 'VOLSTAGG',
    ans: this.sel2
  },

  {
    number: 5,
    text: '5) Who was the first Marvel character outside of the Norse pantheon to be deemed worthy to wield Thor\'s hammer?',
    sel1: 'HERCULES',
    sel2: 'VISION',
    sel3: 'BETA RAY BILL',
    sel4: 'IRON MAN',
    ans: this.sel3
  },

  {
    number: 6,
    text: '6) What is responsible for Thor\'s immortality?',
    sel1: 'HE BATHES IN THE BLACK SEA',
    sel2: 'HE SLEEPS UNDER THE STARS',
    sel3: 'HE EATS APPLES',
    sel4: 'HE DRANK THE BLOOD OF THE BERSERKER',
    ans: this.sel3
  },

  {
    number: 7,
    text: '7) What animals pull Thor\'s chariot?',
    sel1: 'LIONS',
    sel2: 'BULLS',
    sel3: 'WOLVES',
    sel4: 'GOATS',
    ans: this.sel3
  },
];