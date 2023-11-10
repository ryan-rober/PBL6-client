import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: calc(100vh - 5.4rem - 39px);
  padding-top: 6rem;
  height: 100%;
  width: 60%;
  margin: auto;
  background: white;
  input[type=text]:focus {
    outline: none !important;
  }
  textarea:focus {
    outline: none !important;
  }
  .active_pro {
    position: relative;
    color: #2a41e8 !important ;
    }
`
