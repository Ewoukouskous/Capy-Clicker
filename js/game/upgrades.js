// game/upgrades.js - Système d'améliorations

// Fonction pour obtenir le coût actuel d'une amélioration
function getUpgradeCost(upgrade) {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.count));
}

// Fonction pour acheter une amélioration
function buyUpgrade(upgradeId) {
    const upgrade = upgrades.find(u => u.id === upgradeId);

    if (!upgrade) return;

    const cost = getUpgradeCost(upgrade);

    if (capyCount >= cost) {
        capyCount -= cost;
        upgrade.count++;
        upgrade.effect();
        updateDisplay();
        renderUpgradeStore();
        playSound('purchase');
        checkAchievements();
    }
}

// Fonction pour afficher la boutique d'améliorations
function renderUpgradeStore() {
    const storeElement = document.getElementById('upgrade-store');
    storeElement.innerHTML = '';

    upgrades.forEach(upgrade => {
        const cost = getUpgradeCost(upgrade);
        const canAfford = capyCount >= cost;

        const upgradeElement = document.createElement('div');
        upgradeElement.className = `upgrade-item ${canAfford ? '' : 'disabled'}`;
        upgradeElement.innerHTML = `
            <div class="upgrade-name">${upgrade.name}</div>
            <div class="upgrade-cost">${formatNumber(cost)} capybaras</div>
            <div class="upgrade-description">${upgrade.description}</div>
            <div class="upgrade-count">Possédés: ${upgrade.count}</div>
            <div class="purchase-buttons">
                <button class="purchase-btn" data-upgrade-id="${upgrade.id}" data-amount="1">Acheter</button>
            </div>
        `;

        storeElement.appendChild(upgradeElement);

        // Attacher les événements aux boutons seulement si on peut se permettre l'amélioration
        if (canAfford) {
            const buttons = upgradeElement.querySelectorAll('.purchase-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const upgradeId = this.getAttribute('data-upgrade-id');
                    const amount = parseInt(this.getAttribute('data-amount'));
                    buyUpgrade(upgradeId);
                });
            });
        }
    });
}