export const minutes = document.querySelector('#minutes')

export const seconds = document.querySelector('#seconds')

export const timerControls = document.querySelector('.controls')

export const musicControls = document.querySelector('.cards')

export const buttonTreeSong = document.querySelector('#button-tree-song')

export const buttonCloudSong = document.querySelector('#button-cloud-song')

export const buttonMarketSong = document.querySelector('#button-market-song')

export const buttonFireSong = document.querySelector('#button-fire-song')

export const treeSong = new Audio('./././assets/sounds/tree-song.wav')

export const cloudSong = new Audio('./././assets/sounds/cloud-song.wav')

export const marketSong = new Audio('./././assets/sounds/market-song.wav')

export const fireSong = new Audio('./././assets/sounds/fire-song.wav')

treeSong.loop = true
cloudSong.loop = true
marketSong.loop = true
fireSong.loop = true