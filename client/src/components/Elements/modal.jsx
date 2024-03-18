import styled from 'styled-components';

const Modal = () => {
  return <CommonModal></CommonModal>;
};

const CommonModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radious: 9px;
  padding: 20px;
  width: 300px;
  height: 300px;
  z-index: 1000; /* 배경보다 더 위로 올라가도록 설정 */
`;
