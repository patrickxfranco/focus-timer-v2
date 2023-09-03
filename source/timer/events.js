import { musicControls, timerControls } from "./elements.js";
import * as actions from "./actions.js"
import state from "./state.js"

export function registerControls() {

  timerControls.addEventListener('click', event => {
    const button = event.target.dataset.action
    if (typeof actions[button] != 'function') {
      return
    }
    if (button == 'countDown') {
      state.isCounting = true
    }
    actions[button]()
  })

  musicControls.addEventListener('click', event => {
    const button = event.target.dataset.action
    if (typeof actions[button] != 'function') {
      return
    }
    actions[button](button)
  })

  window.addEventListener('keydown', event => {
    if (event.key == '+') {
      actions.addFiveMinutes()
    }
  })

  window.addEventListener('keydown', event => {
    if (event.key == '-') {
      actions.subtractFiveMinutes()
    }
  })

  window.addEventListener('keydown', event => {
    if (String(event.key).toUpperCase() == 'P') {
      actions.countDown()
    }
  })

  window.addEventListener('keydown', event => {
    if (String(event.key).toUpperCase() == 'S') {
      actions.stopTimer()
    }
  })
}