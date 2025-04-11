// ui/display.js - Fonctions d'affichage

// Éléments DOM
const capyImage = document.getElementById('capy');
const capyCountDisplay = document.getElementById('capy-count');
const capysPerSecondDisplay = document.getElementById('capys-per-second');
const soundToggle = document.getElementById('sound-toggle');
const saveButton = document.getElementById('save-game');
const resetButton = document.getElementById('reset-game');

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    capyCountDisplay.textContent = formatNumber(capyCount);
    capysPerSecondDisplay.textContent = formatNumber(capysPerSecond) + ' par seconde';
}

// Fonction pour mettre à jour le bouton de son
function updateSoundToggle() {
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
}