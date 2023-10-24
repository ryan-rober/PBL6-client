import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from '@stores'
// eslint-disable-next-line no-unused-vars
import { Action } from '@type/Store'
// eslint-disable-next-line no-unused-vars
import { AuthState } from '@type/Store/auth'
import { LOAD_PROFILE, LOGIN } from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  authenticated: null,
  profile: {},
  isSubmitting: false,
  message : null
}

function login(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function loginSuccess(state, { payload }) {
  const { profile } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    profile
  })
}

function loginFailure(state, { error }) {
  return updateObject(state, {
    error,
    authenticated: false,
    isLoading: false,
  })
}

function loadProfile(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function profileLoaded(state, { payload }) {
  const { profile } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    profile
  })
}

function profileLoadingError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false,
    authenticated: false
  })
}

// Slice reducer
export default createReducer(initialState, {
  [REQUEST(LOGIN)]: login,
  [SUCCESS(LOGIN)]: loginSuccess,
  [FAILURE(LOGIN)]: loginFailure,

  [REQUEST(LOAD_PROFILE)]: loadProfile,
  [SUCCESS(LOAD_PROFILE)]: profileLoaded,
  [FAILURE(LOAD_PROFILE)]: profileLoadingError
})
