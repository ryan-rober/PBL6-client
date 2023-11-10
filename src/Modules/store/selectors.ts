/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { Store } from '@type/Store'
import { GlobalState } from '@type/Store/global'
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (store: Store) => store.global || initialState

const makeSelectGlobal = () =>
  createSelector(
    selectGlobal,
    (state: GlobalState) => state
  )

export {
  selectGlobal,
  makeSelectGlobal
}
