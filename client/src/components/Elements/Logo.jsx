import styled from 'styled-components';

const Logo = ({ fontSize }) => {
  return (
    <CommonLogo fontSize={fontSize} href="/">
      The Moment
    </CommonLogo>
  );
};

const CommonLogo = styled.a`
  font-size: ${({ fontSize }) => fontSize || '25px'};
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  line-height: 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export default Logo;
