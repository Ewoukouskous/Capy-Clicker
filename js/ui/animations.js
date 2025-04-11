// ui/animations.js - Animations pour l'interface

// Fonction pour créer une animation de clic
function createClickAnimation() {
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-effect';
    clickEffect.textContent = '+' + capysPerClick;

    const xPos = Math.random() * 100 - 50;
    const yPos = Math.random() * 60 - 30;

    clickEffect.style.left = `calc(50% + ${xPos}px)`;
    clickEffect.style.top = `calc(50% + ${yPos}px)`;

    document.querySelector('.clicker-area').appendChild(clickEffect);

    setTimeout(() => {
        clickEffect.remove();
    }, 1000);
}