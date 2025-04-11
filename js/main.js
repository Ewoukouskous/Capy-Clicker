// main.js - Initialisation du jeu

// Initialisation du jeu
function initGame() {
    // Charger la sauvegarde
    const loaded = loadGame();

    if (!loaded) {
        // Initialisation par défaut si pas de sauvegarde
        updateDisplay();
        renderUpgradeStore();
        renderAchievements();
        updateSoundToggle();
    }

    // Attacher les événements
    capyImage.addEventListener('click', clickCapy);

    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        updateSoundToggle();
        saveGame();
    });

    saveButton.addEventListener('click', saveGame);
    resetButton.addEventListener('click', resetGame);

    // Démarrer les timers
    setInterval(gameTick, 1000); // Tick principal chaque seconde
    setInterval(spawnGoldenCapy, 30000); // Essai de capybara doré toutes les 30 secondes
    setInterval(createSpecialEvent, 120000); // Essai d'événement spécial toutes les 2 minutes

    // Sauvegarde automatique
    setInterval(saveGame, 60000); // Sauvegarde automatique toutes les minutes
}

// Lancer le jeu quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initGame);