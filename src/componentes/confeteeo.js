//confete.js quando "O" ganha

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  
  const x = Math.random() * (window.innerWidth - 90); // Largura da tela menos 20 pixels
  const y = Math.random() * (window.innerHeight - 90); // Altura da tela menos 20 pixels
  
  confetti.style.left = x + 'px';
  confetti.style.top = y + 'px';
  
  document.querySelector('.confetti-container').appendChild(confetti);

  confetti.addEventListener('animationend', () => {
    confetti.remove();
  });
}

setInterval(createConfetti, 100);
