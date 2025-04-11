// variables.js - Variables principales du jeu
let capyCount = 0;
let capysPerClick = 1;
let capysPerSecond = 0;
let soundEnabled = true;
let goldenCapyActive = false;
let specialEventActive = false;

// Sons du jeu
const sounds = {
    click: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3'),
    purchase: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-coin-win-notification-1992.mp3'),
    achievement: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3'),
    goldenCapy: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3')
};