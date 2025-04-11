// data/achievements.js - Configuration des réalisations
const achievements = [
    {
        id: 'first-tree',
        name: 'Premier Arbre',
        description: 'Cliquez pour planter votre premier arbre',
        icon: '🌱',
        requirement: () => treeCount >= 1,
        unlocked: false
    },
    {
        id: 'tree-collector',
        name: 'Créateur de forêt',
        description: 'Possédez 100 arbres',
        icon: '🏆',
        requirement: () => treeCount >= 100,
        unlocked: false
    },
    {
        id: 'tree-enthusiast',
        name: 'Une nouvelle espèce menacée s\'est installée dans votre forêt',
        description: 'Possédez 1,000 arbres',
        icon: '🌟',
        requirement: () => treeCount >= 1000,
        unlocked: false
    },
    {
        id: 'tree-master',
        name: 'Votre forêt est reconnue comme reserve forestière',
        description: 'Possédez 10,000 arbres',
        icon: '👑',
        requirement: () => treeCount >= 10000,
        unlocked: false
    },
    {
        id: 'tree-farm-owner',
        name: 'Acteur majeur de la reforestation',
        description: 'Achetez votre première OMS',
        icon: '🏡',
        requirement: () => upgrades.find(u => u.id === 'tree-farm').count > 0,
        unlocked: false
    },
    {
        id: 'tree-millionaire',
        name: 'Millionnaire d\'Arbres',
        description: 'Possédez 1,000,000 d\'arbres',
        icon: '💰',
        requirement: () => treeCount >= 1000000,
        unlocked: false
    },
    {
        id: 'golden-finder',
        name: 'Chercheur d\'Or',
        description: 'Trouvez un arbre doré',
        icon: '✨',
        requirement: () => false, // Sera débloqué manuellement
        unlocked: false
    }
];