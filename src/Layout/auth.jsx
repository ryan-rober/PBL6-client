/* eslint-disable react/prop-types */
import styled from 'styled-components'

const Wrapper = styled.div`
`

const AuthLayout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default AuthLayout
