// game/achievements.js - Système de réalisations

// Fonction pour vérifier et débloquer les réalisations
function checkAchievements() {
    let newAchievements = false;

    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievement.requirement()) {
            achievement.unlocked = true;
            newAchievements = true;

            // Notification
            showNotification(`🏆 Réalisation débloquée: ${achievement.name}`);
            playSound('achievement');
        }
    });

    if (newAchievements) {
        renderAchievements();
    }
}

// Fonction pour afficher les réalisations
function renderAchievements() {
    const achievementsElement = document.getElementById('achievements-list');
    achievementsElement.innerHTML = '';

    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;

        achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
        `;

        achievementsElement.appendChild(achievementElement);
    });
}