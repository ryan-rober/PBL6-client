import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from '@stores'
import { Action } from '@type/Store'
import { AuthState } from '@type/Store/auth'
import { LOAD_PROFILE, LOGIN } from './constants'

export const initialState: AuthState = {
  isLoading: false,
  error: null,
  authenticated: null,
  profile: {},
  isSubmitting: false,
  message : null
}

function login(state: AuthState) {
  return updateObject(state, {
    isLoading: true
  })
}

function loginSuccess(state: AuthState, { payload }: Action) {
  const { profile } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    profile
  })
}

function loginFailure(state: AuthState, { error }: Action) {
  return updateObject(state, {
    error,
    authenticated: false,
    isLoading: false,
  })
}

function loadProfile(state: AuthState) {
  return updateObject(state, {
    isLoading: true
  })
}

function profileLoaded(state: AuthState, { payload }: Action) {
  const { profile } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    profile
  })
}

function profileLoadingError(state: AuthState, { error }: Action) {
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
