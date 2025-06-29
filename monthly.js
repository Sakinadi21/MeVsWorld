const monthlyScoreEl = document.getElementById('monthlyScore');
const backBtn = document.getElementById('backBtn');
const resetMonthlyBtn = document.getElementById('resetMonthly');

function updateMonthlyUI() {
  const monthlyTotal = parseInt(localStorage.getItem('monthlyTotal')) || 0;
  monthlyScoreEl.textContent = monthlyTotal;
}

resetMonthlyBtn.addEventListener('click', () => {
  localStorage.setItem('monthlyTotal', 0);
  localStorage.setItem('dailyScore', 0);
  updateMonthlyUI();
});

backBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Initialize monthly total display
updateMonthlyUI();
