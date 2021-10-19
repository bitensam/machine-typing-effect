const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt =
  'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.';

let indexText = 0;
const timeSetup = 100;

const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText == txt.length) clearInterval(indexTyping);
};

spnCursor.textContent = '|';
const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
};
const indexTyping = setInterval(addLetter, timeSetup);
setInterval(cursorAnimation, timeSetup * 4);
