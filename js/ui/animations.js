// ui/animations.js - Animations pour l'interface

// Fonction pour animer l'image au clic
function createClickAnimation() {
    // Animation de l'image principale
    const image = document.querySelector('.clicker-area img'); // Sélectionnez votre image

    // Ajouter une classe pour l'animation
    image.classList.add('click-pulse');

    // Retirer la classe après l'animation pour permettre de futures animations
    setTimeout(() => {
        image.classList.remove('click-pulse');
    }, 300);

    // Effet de texte existant
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-effect';
    clickEffect.textContent = '+' + treesPerClick;

    const xPos = Math.random() * 100 - 50;
    const yPos = Math.random() * 60 - 30;

    clickEffect.style.left = `calc(50% + ${xPos}px)`;
    clickEffect.style.top = `calc(50% + ${yPos}px)`;

    document.querySelector('.clicker-area').appendChild(clickEffect);

    setTimeout(() => {
        clickEffect.remove();
    }, 1000);
}