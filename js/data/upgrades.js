// data/upgrades.js - Configuration des améliorations
const upgrades = [
    {
        id: 'better-click',
        name: 'Meilleur plantation',
        description: 'Double la puissance de vos plantations',
        baseCost: 15,
        costMultiplier: 1.8,
        count: 0,
        effect: function() {
            treesPerClick *= 2;
        }
    },
    {
        id: 'tree-friend',
        name: 'Ami Arbre',
        description: 'Ajoute 0.5 arbres par seconde',
        baseCost: 25,
        costMultiplier: 1.5,
        count: 0,
        treesPerSecondBonus: 0.5,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    },
    {
        id: 'baby-tree',
        name: 'Jeune Pousse',
        description: 'Produit 1 arbre par seconde',
        baseCost: 100,
        costMultiplier: 1.2,
        count: 0,
        treesPerSecondBonus: 1,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    },
    {
        id: 'tree-family',
        name: 'Petite association',
        description: 'Produit 5 arbres par seconde',
        baseCost: 500,
        costMultiplier: 1.3,
        count: 0,
        treesPerSecondBonus: 5,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    },
    {
        id: 'tree-farm',
        name: 'OMS pour la reforestation',
        description: 'Produit 15 arbres par seconde',
        baseCost: 3000,
        costMultiplier: 1.4,
        count: 0,
        treesPerSecondBonus: 15,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    },
    {
        id: 'tree-sanctuary',
        name: 'Forêt Protégée',
        description: 'Produit 50 arbres par seconde',
        baseCost: 10000,
        costMultiplier: 1.5,
        count: 0,
        treesPerSecondBonus: 50,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    },
    {
        id: 'tree-nation',
        name: 'Nation Forestière',
        description: 'Produit 200 arbres par seconde',
        baseCost: 50000,
        costMultiplier: 1.6,
        count: 0,
        treesPerSecondBonus: 200,
        effect: function() {
            treesPerSecond += this.treesPerSecondBonus;
        }
    }
];