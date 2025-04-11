// save/saveManager.js - Système de sauvegarde

// Fonction pour sauvegarder le jeu
function saveGame() {
    const gameData = {
        capyCount,
        capysPerClick,
        capysPerSecond,
        soundEnabled,
        upgradesCounts: upgrades.map(u => ({ id: u.id, count: u.count })),
        achievementsUnlocked: achievements.map(a => ({ id: a.id, unlocked: a.unlocked })),
        lastSave: Date.now()
    };

    localStorage.setItem('capyClickerSave', JSON.stringify(gameData));
    showNotification('Jeu sauvegardé!');
}

// Fonction pour charger le jeu
function loadGame() {
    const savedData = localStorage.getItem('capyClickerSave');

    if (!savedData) return false;

    try {
        const gameData = JSON.parse(savedData);

        // Restaurer les valeurs principales
        capyCount = gameData.capyCount || 0;
        capysPerClick = gameData.capysPerClick || 1;
        capysPerSecond = gameData.capysPerSecond || 0;
        soundEnabled = gameData.soundEnabled !== undefined ? gameData.soundEnabled : true;

        // Restaurer les améliorations
        if (gameData.upgradesCounts) {
            gameData.upgradesCounts.forEach(savedUpgrade => {
                const upgrade = upgrades.find(u => u.id === savedUpgrade.id);
                if (upgrade) {
                    const countToAdd = savedUpgrade.count - upgrade.count;
                    for (let i = 0; i < countToAdd; i++) {
                        upgrade.count++;
                        upgrade.effect();
                    }
                }
            });
        }

        // Restaurer les réalisations
        if (gameData.achievementsUnlocked) {
            gameData.achievementsUnlocked.forEach(savedAchievement => {
                const achievement = achievements.find(a => a.id === savedAchievement.id);
                if (achievement) {
                    achievement.unlocked = savedAchievement.unlocked;
                }
            });
        }

        // Mettre à jour l'affichage
        updateDisplay();
        renderUpgradeStore();
        renderAchievements();
        updateSoundToggle();

        const lastSave = gameData.lastSave || Date.now();
        const elapsedTime = (Date.now() - lastSave) / 1000; // en secondes

        // Bonus pour le temps hors ligne (maximum 8 heures)
        if (elapsedTime > 10 && capysPerSecond > 0) {
            const offlineTime = Math.min(elapsedTime, 8 * 60 * 60); // Maximum 8 heures
            const offlineBonus = Math.floor(capysPerSecond * offlineTime * 0.5); // 50% de la production normale

            if (offlineBonus > 0) {
                capyCount += offlineBonus;
                updateDisplay();
                showNotification(`Bienvenue! Vous avez gagné ${formatNumber(offlineBonus)} capybaras pendant votre absence!`);
            }
        }

        return true;
    } catch (error) {
        console.error('Erreur lors du chargement de la sauvegarde:', error);
        return false;
    }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser le jeu? Toute progression sera perdue.')) {
        localStorage.removeItem('capyClickerSave');
        location.reload();
    }
}