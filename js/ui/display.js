// ui/display.js - Fonctions d'affichage

// Éléments DOM
const treeImage = document.getElementById('tree');
const treeCountDisplay = document.getElementById('tree-count');
const treesPerSecondDisplay = document.getElementById('trees-per-second');
const soundToggle = document.getElementById('sound-toggle');
const saveButton = document.getElementById('save-game');
const resetButton = document.getElementById('reset-game');

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    treeCountDisplay.textContent = formatNumber(treeCount);
    treesPerSecondDisplay.textContent = formatNumber(treesPerSecond) + ' par seconde';
}

// Fonction pour mettre à jour le bouton de son
function updateSoundToggle() {
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
}