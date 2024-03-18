import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeURL from '../../assets/home.png';
import Button from '../../components/Elements/Button';

const Home = () => {
  return (
    <Wrapper>
      <Img src={homeURL} alt="login" />
      <Link to="/login">
        <HomeButton
          className="homeBtn"
          title="EXPLORE NOW"
          height="50px"
          fontSize="18px"
        />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HomeButton = styled(Button)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default Home;
