import { Outlet, Link } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../Elements/Button';
import Logo from '../Elements/Logo';

const MainLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Link to="/login">
          <Button className="logIn" title="로그인" width="100px" />
        </Link>
      </Header>
      <Hr />
      <ContentMain>
        <Outlet />
      </ContentMain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;
const Header = styled.header`
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Hr = styled.hr`
  border: 1px solid #d4d1d1;
  margin: 0;
`;
const ContentMain = styled.main`
  height: calc(100vh - 4em);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 색상 및 투명도 조절 */
  z-index: 999; /* 모달 레이어 위로 설정 */
`;
export default MainLayout;
