/*
    - Here the logic is, when p1Button is clicked, it should add
      1 to the span. Everytime p1Button is clicked, span increases
      by 1 until the total is 7. Same goes to p2Button. 
    - When Maximum number is reached either p1 or p2,
      the button with max number should be green and
      other should be red and diabled.
    - When reset button is pressed, everything gets reset.
*/
const p1 = {
  score: 0,
  button: document.querySelector('#p1Btn'),
  display: document.querySelector('#p1Display')
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Btn'),
  display: document.querySelector('#p2Display')
};

const resetBtn = document.querySelector('#reset');
const maxNumPlay = document.querySelector('#maxPlay');

let winScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
})

maxNumPlay.addEventListener('change', function () {
  winScore = parseInt(this.value);
  reset();
})

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
resetBtn.addEventListener('click', reset)

