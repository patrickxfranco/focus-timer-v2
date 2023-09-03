import { updateDisplay } from "./timer.js"
import state from "./state.js"
import * as elements from "./elements.js"

export function countDown() {
  clearTimeout(state.countDownID)
  if (!state.isCounting) {
    return
  }
  state.seconds--
  if (state.seconds < 0) {
    state.minutes--
    state.seconds = 59
  }
  if (state.minutes < 0) {
    stopTimer()
    return
  }
  updateDisplay()
  state.countDownID = setTimeout(() => countDown(), 1000)
}

export function stopTimer() {
  state.minutes = 25
  state.seconds = 0
  state.isCounting = false
  updateDisplay()
}

export function addFiveMinutes() {
  if (state.minutes >= 60) {
    return
  }
  state.minutes = state.minutes + 5
  updateDisplay(state.minutes, state.seconds)
}

export function subtractFiveMinutes() {
  if (state.minutes <= 0) {
    return
  }
  state.minutes = state.minutes - 5
  updateDisplay(state.minutes, state.seconds)
}

export function toggleTreeSong(event) {
  if (elements.buttonTreeSong.classList.contains('active')) {
    state.isMute = true
    removeActive()
    return
  }
  if (state.isMute = true) {
    state.isMute = false
    removeActive()
    document.querySelector('#button-tree-song').classList.add('active')
    elements.treeSong.play()
    return
  }
}

export function toggleCloudSong(event) {
  if (elements.buttonCloudSong.classList.contains('active')) {
    state.isMute = true
    removeActive()
    return
  }
  state.isMute = false
  removeActive()
  document.querySelector('#button-cloud-song').classList.add('active')
  elements.cloudSong.play()
  return
}

export function toggleMarketSong(event) {
  if (elements.buttonMarketSong.classList.contains('active')) {
    state.isMute = true
    removeActive()
    return
  }
  state.isMute = false
  removeActive()
  document.querySelector('#button-market-song').classList.add('active')
  elements.marketSong.play()
  return
}

export function toggleFireSong(event) {
  if (elements.buttonFireSong.classList.contains('active')) {
    state.isMute = true
    removeActive()
    return
  }
  state.isMute = false
  removeActive()
  document.querySelector('#button-fire-song').classList.add('active')
  elements.fireSong.play()
  return
}

function removeActive() {
  document.getElementById('button-tree-song').classList.remove('active')
  document.getElementById('button-cloud-song').classList.remove('active')
  document.getElementById('button-market-song').classList.remove('active')
  document.getElementById('button-fire-song').classList.remove('active')
  elements.treeSong.pause()
  elements.cloudSong.pause()
  elements.marketSong.pause()
  elements.fireSong.pause()
}