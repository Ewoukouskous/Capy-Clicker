// utils.js - Fonctions utilitaires

// Fonction pour formater les grands nombres
function formatNumber(num) {
    if (num < 1000) return Math.floor(num);
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
    return (num / 1000000000).toFixed(1) + 'B';
}

// Fonction pour jouer un son
function playSound(soundName) {
    if (soundEnabled && sounds[soundName]) {
        const soundClone = sounds[soundName].cloneNode();
        soundClone.volume = 0.3;
        soundClone.play();
    }
}