// game/clicker.js - Logique de clic

// Fonction pour cliquer sur le capybara
function clickCapy() {
    capyCount += capysPerClick;
    updateDisplay();
    createClickAnimation();
    playSound('click');
    checkAchievements();
    renderUpgradeStore(); // Actualiser la boutique à chaque clic
}

// Fonction pour le tick principal du jeu (s'exécute chaque seconde)
function gameTick() {
    capyCount += capysPerSecond;
    updateDisplay();
    checkAchievements();
    renderUpgradeStore(); // Actualiser la boutique à chaque tick
}