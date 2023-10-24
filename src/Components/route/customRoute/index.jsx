/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Route
} from 'react-router-dom'

import HomeLayout from '@layouts/home'

function CustomRoute({
  component: Component, layout: Layout = HomeLayout, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default CustomRoute
