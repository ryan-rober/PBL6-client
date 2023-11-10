import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: calc(100vh - 5.4rem - 39px);
  padding-top: 4rem;
  height: 100%;
  background: white;
  input[type=text]:focus {
    outline: none !important;
  }
  textarea:focus {
    outline: none !important;
  }
`
