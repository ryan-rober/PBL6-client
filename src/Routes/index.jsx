import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from '@components/route/privateRoute'
import Loading from '@components/loading'

import AuthRoutes from '@modules/auth/routes'
import { ROUTES } from './constant'

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTES.map((routeConfig, index) => (
          <PrivateRoute
            key={index}
            {...routeConfig}
          />
        ))}
      </Switch>
      <AuthRoutes />
    </Suspense>
  )
}
