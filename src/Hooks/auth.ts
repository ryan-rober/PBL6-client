/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import saga from '@modules/auth/store/saga'
import reducer from '@modules/auth/store/reducer'
import { login, loadProfile } from '@modules/auth/store/actions'
import { useInjectSaga, useInjectReducer } from '@stores'
import { USER_ROLE } from '@constants/auth'
import { makeSelectAuthentication } from '@modules/auth/store/selectors'

export const useAuth = () => {
  useInjectSaga({ key: 'auth', saga })
  useInjectReducer({ key: 'auth', reducer })

  const { isLoading, error, authenticated, profile }: any = useSelector(
    makeSelectAuthentication()
  )

  const dispatch = useDispatch()
  const loginAction = (payload?: any) => dispatch(login(payload))
  const loadProfileAction = (payload?: any) => dispatch(loadProfile(payload))

  return {
    isLoading,
    error,
    authenticated,
    profile,
    loginAction,
    loadProfileAction
  }
}

export const useRoles = () => {
  useInjectSaga({ key: 'auth', saga })
  useInjectReducer({ key: 'auth', reducer })
  const role = USER_ROLE.ADMIN

  const isSuperAdmin = [USER_ROLE.ADMIN].includes(role)
  const isAdmin = [USER_ROLE.NISSHOKEN_ADMIN].includes(role)
  const isCompany = [USER_ROLE.COMPANY_ADMIN].includes(role)

  return { isSuperAdmin, isAdmin, isCompany }
}
