// data/upgrades.js - Configuration des améliorations
const upgrades = [
    {
        id: 'better-click',
        name: 'Meilleur clic',
        description: 'Double la puissance de votre clic',
        baseCost: 15,
        costMultiplier: 1.8,
        count: 0,
        effect: function() {
            capysPerClick *= 2;
        }
    },
    {
        id: 'capy-friend',
        name: 'Ami Capybara',
        description: 'Ajoute 0.5 capybaras par seconde',
        baseCost: 25,
        costMultiplier: 1.5,
        count: 0,
        capysPerSecondBonus: 0.5,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    },
    {
        id: 'baby-capy',
        name: 'Bébé Capybara',
        description: 'Produit 1 capybara par seconde',
        baseCost: 100,
        costMultiplier: 1.2,
        count: 0,
        capysPerSecondBonus: 1,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    },
    {
        id: 'capy-family',
        name: 'Famille Capybara',
        description: 'Produit 5 capybaras par seconde',
        baseCost: 500,
        costMultiplier: 1.3,
        count: 0,
        capysPerSecondBonus: 5,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    },
    {
        id: 'capy-farm',
        name: 'Ferme de Capybaras',
        description: 'Produit 15 capybaras par seconde',
        baseCost: 3000,
        costMultiplier: 1.4,
        count: 0,
        capysPerSecondBonus: 15,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    },
    {
        id: 'capy-sanctuary',
        name: 'Sanctuaire de Capybaras',
        description: 'Produit 50 capybaras par seconde',
        baseCost: 10000,
        costMultiplier: 1.5,
        count: 0,
        capysPerSecondBonus: 50,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    },
    {
        id: 'capy-nation',
        name: 'Nation Capybara',
        description: 'Produit 200 capybaras par seconde',
        baseCost: 50000,
        costMultiplier: 1.6,
        count: 0,
        capysPerSecondBonus: 200,
        effect: function() {
            capysPerSecond += this.capysPerSecondBonus;
        }
    }
];