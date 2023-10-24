/* eslint-disable react/prop-types */
import { useMemo } from 'react'
import {
  Route,
  // eslint-disable-next-line no-unused-vars
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
}) {
  const { authenticated } = useAuth()
  const { rules } = rest
  const role = USER_ROLE.ADMIN
  // eslint-disable-next-line no-unused-vars
  const accessible = useMemo(() => authenticated && rules?.includes(role), [authenticated, role, rules])
  
  if (isNil(authenticated)) {
    return null
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>)}
    />
  )
}

export default PrivateRoute
