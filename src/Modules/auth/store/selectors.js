/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

// import { Store } from '@type/Store'
// import { AuthState } from '@type/Store/auth'
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAuthentication = (store) => store.auth || initialState

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthentication,
    (state) => state
  )

export {
  selectAuthentication,
  makeSelectAuthentication
}
