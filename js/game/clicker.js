// game/clicker.js - Logique de clic

// Fonction pour cliquer sur l'arbre
function clickTree() {
    treeCount += treesPerClick;
    updateDisplay();
    createClickAnimation();
    playSound('click');
    checkAchievements();
    renderUpgradeStore(); // Actualiser la boutique à chaque clic
}

// Fonction pour le tick principal du jeu (s'exécute chaque seconde)
function gameTick() {
    treeCount += treesPerSecond;
    updateDisplay();
    checkAchievements();
    renderUpgradeStore(); // Actualiser la boutique à chaque tick
}