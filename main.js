const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const sentences = [
  'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.',
  'I am running away from my responsibilities. And it feels good.',
  'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.',
];

let indexText = -25;
let indexSentences = 0;
const timeSetup = 400;

const addLetter = () => {
  if (indexText >= 0) {
    spnText.textContent += sentences[indexSentences][indexText];
  }
  indexText++;
  if (indexText == sentences[indexSentences].length) {
    indexSentences++;
    if (indexSentences === sentences.length) {
      return;
    }

    return setTimeout(() => {
      indexText = -25;

      spnText.textContent = '';
      addLetter();
    }, 3000);
  }
  setTimeout(addLetter, 40);
};

addLetter();

// cursor
spnCursor.textContent = '|';
const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
};

setInterval(cursorAnimation, timeSetup);
