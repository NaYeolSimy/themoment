import styled from 'styled-components';

import plusURL from '../../assets/plus.svg';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';

const AlbumDetail = () => {
  return (
    <MainCotents>
      <CreateImgWrapper>
        <CreateAlbum>
          <PlusImg src={plusURL} />
          <Span>사진 추가</Span>
        </CreateAlbum>
      </CreateImgWrapper>
      <AlbumWrapper>
        <Img src={user1} />
      </AlbumWrapper>
      <AlbumWrapper>
        <Img src={user2} />
      </AlbumWrapper>
      <AlbumWrapper>
        <Img src={user3} />
      </AlbumWrapper>
      <AlbumWrapper>
        <Img src={user4} />
      </AlbumWrapper>
    </MainCotents>
  );
};

const CreateImgWrapper = styled.div`
  height: 210px;
  width: 210px;
  border: 3px solid #d4d1d1;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CreateAlbum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  font-size: 18px;
`;
const PlusImg = styled.img`
  display: block;
  width: 64px;
`;

const MainCotents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 5%;
`;

const Img = styled.img`
  height: 210px;
  width: 210px;
`;
const AlbumWrapper = styled.div`
  display: inline-block;
`;

export default AlbumDetail;
