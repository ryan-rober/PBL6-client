/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { Store } from '@type/Store'
import { AuthState } from '@type/Store/auth'
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectAuthentication = (store: Store) => store.auth || initialState

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthentication,
    (state: AuthState) => state
  )

export {
  selectAuthentication,
  makeSelectAuthentication
}
