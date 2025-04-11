// game/clicker.js - Logique de clic

// Fonction pour cliquer sur le capybara
function clickCapy() {
    capyCount += capysPerClick;
    updateDisplay();
    createClickAnimation();
    playSound('click');
    checkAchievements();
}

// Fonction pour le tick principal du jeu (s'exécute chaque seconde)
function gameTick() {
    capyCount += capysPerSecond;
    updateDisplay();
    checkAchievements();
}