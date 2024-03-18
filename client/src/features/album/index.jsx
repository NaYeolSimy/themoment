import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';

import folderImgURL from '../../assets/folder.png';

const Album = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <FolderImg src={folderImgURL} />
      <Span>
        생성된 앨범이 없습니다.
        <br />새 앨범을 생성해주세요.
      </Span>
      <Button
        title="새 앨범 생성하기"
        width="200px"
        height="40px"
        onClick={() => handleOpenModal()}
      />
      {isModalOpen && (
        <Modal>
          <Title>앨범 생성</Title>
          <Input placeholder="album" />
          <Button
            title="취소"
            width="100px"
            height="40px"
            backgroundColor="white"
            color="#888383"
            onClick={() => handleCloseModal()}
            border={0}
          />
          <Button
            title="완료"
            width="100px"
            height="40px"
            onClick={() => handleCloseModal()}
          />
        </Modal>
      )}
      {isModalOpen && <Backdrop />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
`;

const FolderImg = styled.img`
  margin-bottom: 20px;
`;

const Span = styled.span`
  font-size: 15px;
  color: #888383;
  margin-bottom: 10px;
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

const Modal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 9px;
  padding: 20px;
  width: 400px;
  height: 180px;
  z-index: 1000; /* 배경보다 더 위로 올라가도록 설정 */
`;

const Title = styled.span`
  color: #2f80ed;
  font-size: 24px;
  font-weight: 500;
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
`;

export default Album;
