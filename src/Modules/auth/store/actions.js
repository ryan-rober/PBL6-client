import { REQUEST } from '@stores'
// eslint-disable-next-line no-unused-vars
// import { Payload } from '@type/Store'
import {
  LOGIN,
  LOAD_PROFILE
} from './constants'

export function login(payload) {
  return {
    type: REQUEST(LOGIN),
    payload
  }
}

export function loadProfile(payload) {
  return {
    type: REQUEST(LOAD_PROFILE),
    payload
  }
}
