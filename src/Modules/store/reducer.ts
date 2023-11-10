/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from '@stores'
import { GlobalState } from '@type/Store/global'
import { TOGGLE_SIDEBAR, HOVER_SIDEBAR } from './constants'

export const initialState: GlobalState = {
  sidebarCompact: false,
  sidebarHover: false
}

function toggleSidebar(state: GlobalState) {
  return updateObject(state, {
    sidebarCompact: !state.sidebarCompact
  })
}

function hoverSidebar(state: GlobalState) {
  return updateObject(state, {
    sidebarHover: !state.sidebarHover
  })
}

// Slice reducer
export default createReducer(initialState, {
  [TOGGLE_SIDEBAR]: toggleSidebar,
  [HOVER_SIDEBAR]: hoverSidebar
})
