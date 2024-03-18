import styled from 'styled-components';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import checkURL from '../../assets/check.svg';
import trashcanURL from '../../assets/trash-can.svg';
import moveURL from '../../assets/move.svg';
import downloadURL from '../../assets/download.svg';
import arrowURL from '../../assets/arrow.svg';

import Input from '../Elements/Input';
import CommonButton from '../Elements/Button';

const Section = () => {
  const [isCheckedAll, setisCheckedAll] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const handleCheckAllChange = () => {
    setisCheckedAll(!isCheckedAll);
  };
  const handleCheckChange = () => {
    setisChecked(!isChecked);
  };

  const handleClick = () => {
    console.log('실행');
  };

  return (
    <Wrapper>
      <Link
        to="/main"
        style={{
          textDecoration: 'none',
          color: '#2F80ED',
          display: 'flex',
          alignItems: 'center',
          margin: '0 0 10px 0',
        }}
      >
        <img
          src={arrowURL}
          alt="앨범목록으로 돌아가기"
          style={{ margin: '0 5px 0 0' }}
        />
        <span>앨범목록으로 돌아가기</span>
      </Link>
      <Title>앨범 목록</Title>
      <ControlIconWrapper>
        {!isChecked && (
          <SelecAlltWrapper onChange={handleCheckAllChange}>
            <CheckBox type="checkbox" id="checkedAll" checked={isCheckedAll} />
            <CheckedAll for="checkedAll" isCheckedAll={isCheckedAll}>
              전체 선택하기
            </CheckedAll>
          </SelecAlltWrapper>
        )}
        <RightWrapper>
          <ActionIconsWrapper onChange={handleCheckChange}>
            <CheckBox type="checkbox" id="checked" checked={isChecked} />
            <Check for="checked" isChecked={isChecked} />
            <Move for="checked" isChecked={isChecked} />
            <Download for="checked" isChecked={isChecked} />
            <Delete for="checked" isChecked={isChecked} onClick={handleClick} />
          </ActionIconsWrapper>
          <RightHr />
          <SerchWrapper>
            <Input
              type="text"
              placeholder="serch"
              height="30px"
              width="300px"
              fontSize="13px"
              lastChild="lastChild"
            />
            <Button title="검색" width="100px" height="30px" />
          </SerchWrapper>
        </RightWrapper>
      </ControlIconWrapper>
      <BottomHr />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.span`
  display: inline-block;
  text-align: left;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 20px;
`;

const ControlIconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-content: center;
  position: relative;
  margin-bottom: 15px;
`;
const SelecAlltWrapper = styled.div`
  position: absolute;
  left: 0%;
  height: 100%;
`;

const ActionIconsWrapper = styled.div`
  height: 30px;
`;

const RightWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0%;
`;
const SerchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  display: none;
`;

const CheckedAll = styled.label`
  width: 100%;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  padding-left: 20px;
  background-repeat: no-repeat;
  background-image: url(${checkURL});
  background-position: ${({ isCheckedAll }) =>
    isCheckedAll ? '0px 11.2px' : '0px -30.8px'};
  background-size: 19px cover;
  line-height: 40px;
`;

const Check = styled.label`
  width: 30px;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  background-repeat: no-repeat;
  background-image: url(${checkURL});
  background-position: ${({ isChecked }) =>
    isChecked ? '5px 11.2px' : '5px -30.8px'};

  line-height: 19px;
  margin-left: 10px;
`;

const Move = styled.label`
  width: 30px;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  color: #888383;
  background-repeat: no-repeat;
  background-image: url(${moveURL});
  background-position: ${({ isChecked }) =>
    isChecked ? '2.8px 11px' : '-47px 11px'};
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
  background-position: ${({ isChecked }) =>
    isChecked ? '5px 11px' : '-45px 11px'};
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
  background-position: ${({ isChecked }) =>
    isChecked ? '0px 6px' : '-50px 6px'};
  line-height: 19px;
  margin-left: 10px;
  margin-right: 15px;
`;

const Button = styled(CommonButton)`
  margin-left: 20px;
`;

const RightHr = styled.div`
  border-right: 2px solid #edeaea;
  margin: 0;
  height: 40px;
  margin-right: 20px;
`;
const BottomHr = styled.hr`
  border: 1px solid #edeaea;
  margin: 0;
  width: 100%;
  margin-bottom: 30px;
`;

export default Section;
