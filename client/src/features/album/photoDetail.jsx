import styled from 'styled-components';
import { Link } from 'react-router-dom';

import trashcanURL from '../../assets/trash-can.svg';
import moveURL from '../../assets/move.svg';
import downloadURL from '../../assets/download.svg';
import arrowURL from '../../assets/arrow.svg';
import user1 from '../../assets/user1.png';

const PhotoDetail = () => {
  return (
    <Wrapper>
      <Link
        to="/main"
        style={{
          textDecoration: 'none',
          color: '#2F80ED',
          display: 'inline-flex',
          alignItems: 'center',
          height: '100%',
          margin: '0 40px 10px 0',
        }}
      >
        <img
          src={arrowURL}
          alt="앨범으로 돌아가기"
          style={{ margin: '0 5px 0 0' }}
        />
        <span>앨범으로 돌아가기</span>
      </Link>
      <Img src={user1} />
      <ActionIconsWrapper>
        <IconWrapper>
          <Move />
          <Download />
          <Delete />
        </IconWrapper>
      </ActionIconsWrapper>
      <RightHr />
      <InfoWrapper>
        <Info>
          <h3
            style={{
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            이미지 정보
          </h3>
          <span
            style={{
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            Christoper.jpg
          </span>
          <div
            style={{
              display: 'inline-block',
              borderTop: '1px solid #ABABAB',
              color: '#ABABAB',
              fontSize: '13px',
              textAlign: 'left',
              width: '200px',
            }}
          >
            파일명
          </div>
          <span
            style={{
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            2022-12-15,9:34 PM
          </span>
          <div
            style={{
              display: 'inline-block',
              borderTop: '1px solid #ABABAB',
              color: '#ABABAB',
              fontSize: '13px',
              textAlign: 'left',
              width: '200px',
            }}
          >
            업로드 날짜
          </div>
          <span
            style={{
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            256.6KB
          </span>
          <div
            style={{
              display: 'inline-block',
              borderTop: '1px solid #ABABAB',
              color: '#ABABAB',
              fontSize: '13px',
              textAlign: 'left',
              width: '200px',
            }}
          >
            파일 용량
          </div>
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
};
export default PhotoDetail;

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;

const ActionIconsWrapper = styled.div`
  display: inline-flex;
  margin: 0 20px 0 20px;
  height: inherit;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Move = styled.label`
  width: 30px;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  background-repeat: no-repeat;
  background-image: url(${moveURL});
  background-position: -47px 11px;
  line-height: 19px;
  margin-left: 10px;
`;

const Download = styled.label`
  width: 30px;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  background-repeat: no-repeat;
  background-image: url(${downloadURL});
  background-position: -45px 11px;
  line-height: 19px;
  margin-left: 10px;
`;

const Delete = styled.label`
  width: 30px;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  background-repeat: no-repeat;
  background-image: url(${trashcanURL});
  background-position: -50px 6px;
  line-height: 19px;
  margin-left: 10px;
  margin-right: 15px;
`;

const RightHr = styled.div`
  display: inline-block;
  border-right: 2px solid #edeaea;
  margin: 0;
  height: 640px;
  margin-right: 20px;
`;

const Img = styled.img`
  height: 600px;
  width: 600px;
  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: inline-block;
  margin: 0px 0 0 20px;
`;
