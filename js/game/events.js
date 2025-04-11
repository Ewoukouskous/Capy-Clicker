// game/events.js - Événements spéciaux

// Fonction pour générer un capybara doré aléatoire
function spawnGoldenCapy() {
    if (goldenCapyActive || Math.random() > 0.1) return; // 10% de chance toutes les 30 secondes

    goldenCapyActive = true;

    const goldenCapy = document.createElement('img');
    goldenCapy.className = 'golden-capy';
    goldenCapy.src = 'https://via.placeholder.com/80x80/FFD700/000000?text=Capy'; // Remplacer par une image de capybara dorée

    // Position aléatoire sur l'écran
    const viewportWidth = window.innerWidth - 100;
    const viewportHeight = window.innerHeight - 100;

    goldenCapy.style.left = `${Math.random() * viewportWidth}px`;
    goldenCapy.style.top = `${Math.random() * viewportHeight}px`;

    goldenCapy.addEventListener('click', () => {
        // Bonus aléatoire
        const bonus = Math.floor(capyCount * 0.1) + 100;
        capyCount += bonus;

        // Débloquer la réalisation
        const goldenFinderAchievement = achievements.find(a => a.id === 'golden-finder');
        if (goldenFinderAchievement && !goldenFinderAchievement.unlocked) {
            goldenFinderAchievement.unlocked = true;
            renderAchievements();
            showNotification('🏆 Réalisation débloquée: Chercheur d\'Or');
        }

        showNotification(`✨ Capybara doré! +${formatNumber(bonus)} capybaras!`);
        playSound('goldenCapy');
        updateDisplay();

        goldenCapy.remove();
        goldenCapyActive = false;
    });

    // Disparaît après 10 secondes
    setTimeout(() => {
        if (document.body.contains(goldenCapy)) {
            goldenCapy.remove();
            goldenCapyActive = false;
        }
    }, 10000);

    document.body.appendChild(goldenCapy);
}

// Fonction pour créer un événement spécial aléatoire
function createSpecialEvent() {
    if (specialEventActive || Math.random() > 0.05) return; // 5% de chance toutes les 2 minutes

    specialEventActive = true;

    const events = [
        {
            name: 'Frénésie de Capybaras',
            description: 'Double votre production par clic pendant 30 secondes!',
            action: () => {
                const originalClickPower = capysPerClick;
                capysPerClick *= 2;

                setTimeout(() => {
                    capysPerClick = originalClickPower;
                    showNotification('La frénésie de Capybaras est terminée!');
                }, 30000);
            }
        },
        {
            name: 'Ruée vers les Capybaras',
            description: 'Double votre production passive pendant 60 secondes!',
            action: () => {
                const originalPerSecond = capysPerSecond;
                capysPerSecond *= 2;

                setTimeout(() => {
                    capysPerSecond = originalPerSecond;
                    showNotification('La ruée vers les Capybaras est terminée!');
                }, 60000);
            }
        },
        {
            name: 'Pluie de Capybaras',
            description: 'Recevez immédiatement un bonus de capybaras!',
            action: () => {
                const bonus = Math.floor(capyCount * 0.2) + 200;
                capyCount += bonus;
                updateDisplay();
                showNotification(`Vous avez reçu ${formatNumber(bonus)} capybaras!`);
            }
        }
    ];

    // Choisir un événement aléatoire
    const event = events[Math.floor(Math.random() * events.length)];

    // Créer l'élément événement
    const eventElement = document.createElement('div');
    eventElement.className = 'special-event';
    eventElement.innerHTML = `
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <button id="accept-event">Accepter</button>
    `;

    // Insérer avant la boutique
    document.querySelector('.store-container').before(eventElement);

    // Ajouter l'événement au bouton
    eventElement.querySelector('#accept-event').addEventListener('click', () => {
        event.action();
        eventElement.remove();
        specialEventActive = false;
        playSound('achievement');
    });

    // Disparaît après 60 secondes si non accepté
    setTimeout(() => {
        if (document.body.contains(eventElement)) {
            eventElement.remove();
            specialEventActive = false;
        }
    }, 60000);
}