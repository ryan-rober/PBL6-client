/* eslint-disable react/prop-types */
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from '@layouts/home'
import { useAuth } from '@hooks'
import { isNil } from 'lodash'

function PublicRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}: any) {
  const { authenticated } = useAuth()
  if (isNil(authenticated)) {
    return null
  }

  return (
    <Route
      {...rest}
      render={(props: any) => (!authenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/', state: {} }}
        />
      ))}
    />
  )
}

export default PublicRoute
