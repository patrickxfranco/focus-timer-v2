import * as elements from "./elements.js"
import state from "./state.js"

export function updateDisplay(minutes, seconds) {
  elements.minutes.innerText = String(state.minutes).padStart(2, 0)
  elements.seconds.innerText = String(state.seconds).padStart(2, 0)
}