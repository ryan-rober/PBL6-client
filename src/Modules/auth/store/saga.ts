import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from '@stores'
import { login } from '@apis'
import { LOAD_PROFILE, LOGIN } from './constants'
import { getLocalStorage, setLocalStorage, STORAGE } from '@utils'
import { Action } from '@type/Store'

export function* loginSaga({ payload }: Action) {
  
  try {
    const { data: result } = yield login(payload)
    const { tokens, user } = result
    setLocalStorage(STORAGE.USER_TOKEN, tokens.access.token)
    setLocalStorage(STORAGE.USER_DATA, JSON.stringify(user))
    yield put({
      type: SUCCESS(LOGIN),
      payload: {
        profile: result
      }
    })
  } catch (error) {
    yield put({
      type: FAILURE(LOGIN),
      error
    })
  }
}

export function* loadProfileSaga() {
  try {
    const result: any = getLocalStorage(STORAGE.USER_DATA)
    if (result) {
      yield put({
        type: SUCCESS(LOAD_PROFILE),
        payload: {
          profile: JSON.parse(result)
        }
      })
    } else {
      throw new Error('403')
    }
  } catch (error) {
    yield put({
      type: FAILURE(LOAD_PROFILE),
      error
    })
  }
}

export default function* authSaga() {
  yield takeLatest(REQUEST(LOGIN), loginSaga)
  yield takeLatest(REQUEST(LOAD_PROFILE), loadProfileSaga)
}
