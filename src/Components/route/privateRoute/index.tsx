/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from '@layouts/home'
import { USER_ROLE } from '@constants/auth'
import { useAuth } from '@hooks'
import { isNil } from 'lodash'

function PrivateRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}: any) {
  const { authenticated } = useAuth()
  const { rules } = rest
  const role = USER_ROLE.ADMIN
  const accessible = useMemo(() => authenticated && rules?.includes(role), [authenticated, role, rules])
  
  if (isNil(authenticated)) {
    return null
  }

  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>)}
    />
  )
}

export default PrivateRoute
