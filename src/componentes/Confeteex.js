//confete.js quando "X" ganha

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'x-shape';
    const x = Math.random() * (window.innerWidth - 90);
    const y = Math.random() * (window.innerHeight - 90);
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';

    if (Math.random() < 0.5) {
        confetti.classList.add('alt');
    }

    document.querySelector('.confettix-container').appendChild(confetti);

    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

setInterval(createConfetti, 100);
