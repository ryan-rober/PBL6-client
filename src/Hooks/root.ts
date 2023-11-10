/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import {
  toggleSidebar,
  hoverSidebar
} from '@modules/store/actions'
import {
  makeSelectGlobal
} from '@modules/store/selectors'

export const useRoot = () => {
  const dispatch = useDispatch()

  const { sidebarCompact, sidebarHover }: any = useSelector(makeSelectGlobal())

  const toggleSidebarAction = (payload?: any) => dispatch(toggleSidebar(payload))
  const hoverSidebarAction = (payload?: any) => dispatch(hoverSidebar(payload))

  return {
    sidebarCompact,
    sidebarHover,
    toggleSidebarAction,
    hoverSidebarAction
  }
}
