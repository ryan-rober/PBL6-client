/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header, Footer, ModalSignIn } from '@components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  overflow: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.bg_primary_light};
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: white;
`;

const HomeLayout = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const history = useHistory();
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    if (history.location.pathname === '/profile') {
      setIsProfile(true);
    }
  }, [history.location.pathname]);

  return (
    <Wrapper>
      <Header setIsShow={setIsShow} />
      <Main>
        <Content>{children}</Content>
      </Main>
      {isShow && <ModalSignIn event={() => setIsShow(false)} />}
      {!isProfile && <Footer />}
    </Wrapper>
  );
};

export default HomeLayout;
