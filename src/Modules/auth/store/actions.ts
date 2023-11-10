import { REQUEST } from '@stores'
import { Payload } from '@type/Store'
import {
  LOGIN,
  LOAD_PROFILE
} from './constants'

export function login(payload: Payload) {
  return {
    type: REQUEST(LOGIN),
    payload
  }
}

export function loadProfile(payload: Payload) {
  return {
    type: REQUEST(LOAD_PROFILE),
    payload
  }
}
