// data/achievements.js - Configuration des réalisations
const achievements = [
    {
        id: 'first-capy',
        name: 'Premier Capybara',
        description: 'Cliquez pour obtenir votre premier capybara',
        icon: '🐹',
        requirement: () => capyCount >= 1,
        unlocked: false
    },
    {
        id: 'capy-collector',
        name: 'Collectionneur de Capybaras',
        description: 'Possédez 100 capybaras',
        icon: '🏆',
        requirement: () => capyCount >= 100,
        unlocked: false
    },
    {
        id: 'capy-enthusiast',
        name: 'Enthousiaste des Capybaras',
        description: 'Possédez 1,000 capybaras',
        icon: '🌟',
        requirement: () => capyCount >= 1000,
        unlocked: false
    },
    {
        id: 'capy-master',
        name: 'Maître Capybara',
        description: 'Possédez 10,000 capybaras',
        icon: '👑',
        requirement: () => capyCount >= 10000,
        unlocked: false
    },
    {
        id: 'capy-farm-owner',
        name: 'Propriétaire de Ferme',
        description: 'Achetez votre première ferme de capybaras',
        icon: '🏡',
        requirement: () => upgrades.find(u => u.id === 'capy-farm').count > 0,
        unlocked: false
    },
    {
        id: 'capy-millionaire',
        name: 'Millionnaire de Capybaras',
        description: 'Possédez 1,000,000 de capybaras',
        icon: '💰',
        requirement: () => capyCount >= 1000000,
        unlocked: false
    },
    {
        id: 'golden-finder',
        name: 'Chercheur d\'Or',
        description: 'Trouvez un capybara doré',
        icon: '✨',
        requirement: () => false, // Sera débloqué manuellement
        unlocked: false
    }
];