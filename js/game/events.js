// game/events.js - Événements spéciaux

// Fonction pour générer un arbre doré aléatoire
function spawnGoldenTree() {
    if (goldenTreeActive || Math.random() > 0.1) {
        goldenTreeActive = true;

        const goldenTree = document.createElement('img');
        goldenTree.className = 'golden-tree';
        goldenTree.src = 'http://localhost:63342/Capy-Clicker/assets/golden-tree.png';
        goldenTree.style.zIndex = '1000'; // Remplacer par une image d'arbre doré

        document.body.appendChild(goldenTree);
        console.log("Arbre doré ajouté à la position:", goldenTree.style.left, goldenTree.style.top);

        // Position aléatoire sur l'écran
        const viewportWidth = window.innerWidth - 100;
        const viewportHeight = window.innerHeight - 100;

        goldenTree.style.left = `${Math.random() * viewportWidth}px`;
        goldenTree.style.top = `${Math.random() * viewportHeight}px`;

        goldenTree.addEventListener('click', () => {
            // Bonus aléatoire
            const bonus = Math.floor(treeCount * 0.1) + 100;
            treeCount += bonus;

            // Débloquer la réalisation
            const goldenFinderAchievement = achievements.find(a => a.id === 'golden-finder');
            if (goldenFinderAchievement && !goldenFinderAchievement.unlocked) {
                goldenFinderAchievement.unlocked = true;
                renderAchievements();
                showNotification('🏆 Réalisation débloquée: Chercheur d\'Or');
            }

            showNotification(`✨ Arbre doré! +${formatNumber(bonus)} arbres!`);
            playSound('goldenTree');
            updateDisplay();

            goldenTree.remove();
            goldenTreeActive = false;
        });

        // Disparaît après 10 secondes
        setTimeout(() => {
            if (document.body.contains(goldenTree)) {
                goldenTree.remove();
                goldenTreeActive = false;
            }
        }, 10000);

        document.body.appendChild(goldenTree);
    }
}

// Fonction pour créer un événement spécial aléatoire
function createSpecialEvent() {
    if (specialEventActive || Math.random() > 0.05) {
        specialEventActive = true;

        const events = [
            {
                name: 'Frénésie Forestière',
                description: 'Double votre production par clic pendant 30 secondes!',
                action: () => {
                    const originalClickPower = treesPerClick;
                    treesPerClick *= 2;

                    setTimeout(() => {
                        treesPerClick = originalClickPower;
                        showNotification('La frénésie forestière est terminée!');
                    }, 30000);
                }
            },
            {
                name: 'Pousse Accélérée',
                description: 'Double votre production passive pendant 60 secondes!',
                action: () => {
                    const originalPerSecond = treesPerSecond;
                    treesPerSecond *= 2;

                    setTimeout(() => {
                        treesPerSecond = originalPerSecond;
                        showNotification('La croissance accélérée est terminée!');
                    }, 60000);
                }
            },
            {
                name: 'Pluie Forestière',
                description: 'Recevez immédiatement un bonus d\'arbres!',
                action: () => {
                    const bonus = Math.floor(treeCount * 0.2) + 200;
                    treeCount += bonus;
                    updateDisplay();
                    showNotification(`Vous avez reçu ${formatNumber(bonus)} arbres!`);
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
    } // 5% de chance toutes les 2 minutes
}