let score = parseInt(localStorage.getItem('dailyScore')) || 0;
let monthlyTotal = parseInt(localStorage.getItem('monthlyTotal')) || 0;

const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const btnGood = document.getElementById('btnGood');
const btnBad = document.getElementById('btnBad');
const btnReset = document.getElementById('btnReset');
const viewMonthly = document.getElementById('viewMonthly');

function updateMessage(score) {
  if (score >= 10) {
    return "Amazing! Keep it up! 🌟";
  } else if (score >= 5) {
    return "Great going! 💪";
  } else if (score >= 1) {
    return "You're on the right track 🌿";
  } else if (score === 0) {
    return "Start tracking your habits!";
  } else if (score >= -4) {
    return "Let's try to improve! 💡";
  } else {
    return "Don’t give up. Tomorrow is a new chance! 🕊️";
  }
}

function updateScore(change) {
  score += change;
  monthlyTotal += change;

  // Save scores
  localStorage.setItem('dailyScore', score);
  localStorage.setItem('monthlyTotal', monthlyTotal);

  scoreEl.textContent = score;
  messageEl.textContent = updateMessage(score);
}

function resetScore() {
  // Adjust monthlyTotal by subtracting the current daily score
  monthlyTotal -= score;
  if (monthlyTotal < 0) monthlyTotal = 0;

  score = 0;

  localStorage.setItem('dailyScore', score);
  localStorage.setItem('monthlyTotal', monthlyTotal);

  scoreEl.textContent = score;
  messageEl.textContent = "Start tracking your habits!";
}

btnGood.addEventListener('click', () => updateScore(1));
btnBad.addEventListener('click', () => updateScore(-1));
btnReset.addEventListener('click', resetScore);
viewMonthly.addEventListener('click', () => {
  window.location.href = 'monthly.html';
});

// Initialize UI
scoreEl.textContent = score;
messageEl.textContent = updateMessage(score);
