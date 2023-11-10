import { Payload } from '@type/Store'
import {
  TOGGLE_SIDEBAR,
  HOVER_SIDEBAR
} from './constants'

export function toggleSidebar(payload: Payload) {
  return {
    type: TOGGLE_SIDEBAR,
    payload
  }
}

export function hoverSidebar(payload: Payload) {
  return {
    type: HOVER_SIDEBAR,
    payload
  }
}
