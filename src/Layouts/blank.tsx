/* eslint-disable react/prop-types */
import styled from 'styled-components'
import {  Footer } from '@components'
import { useRoot } from '@hooks'

const Wrapper: any = styled.div`
  overflow: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`
const Main = styled.main`
  display: flex;
  width: 100%;
  padding: 0;
  background: ${({ theme }: any) => theme.bg_primary_light};
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  overflow: hidden;
  /* position: relative; */
`

const BlankLayout = ({ children }: any) => {
    const { sidebarCompact } = useRoot()
    return (
      <Wrapper >
      </Wrapper>
    )
  }

export default BlankLayout
