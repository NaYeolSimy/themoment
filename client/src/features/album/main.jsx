import styled from 'styled-components';

import plusURL from '../../assets/plus.svg';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';

const Main = () => {
  return (
    <MainCotents>
      <CreateImgWrapper>
        <CreateAlbum>
          <PlusImg src={plusURL} />
          <Span>새 앨범 생성</Span>
        </CreateAlbum>
      </CreateImgWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
      </AlbumWrapper>
      <AlbumWrapper>
        <CreateImgWrapper>
          <ImgWrapper>
            <Img src={user1} />
            <Img src={user2} />
            <Img src={user3} />
            <Img src={user4} />
          </ImgWrapper>
        </CreateImgWrapper>
        <Span>앨범 명</Span>
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

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  aline-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 4%;
`;
const Img = styled.img``;
const AlbumWrapper = styled.div`
  display: inline-block;
  width: 210px;
`;
export default Main;
