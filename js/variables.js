// variables.js - Variables principales du jeu
let treeCount = 0;
let treesPerClick = 1;
let treesPerSecond = 0;
let soundEnabled = true;
let goldenTreeActive = true;
let specialEventActive = true;

// Sons du jeu
const sounds = {
    click: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3'),
    purchase: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-coin-win-notification-1992.mp3'),
    achievement: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3'),
    goldenTree: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3')
};