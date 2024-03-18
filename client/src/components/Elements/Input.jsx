import styled from 'styled-components';
import magnifierURL from '../../assets/magnifier.svg';

const Input = ({ type, placeholder, lastChild, height, width, fontSize }) => {
  let placeholderText;

  switch (placeholder) {
    case 'email':
      placeholderText = '이메일';
      break;
    case 'password':
      placeholderText = '비밀번호';
      break;
    case 'name':
      placeholderText = '이름';
      break;
    case 'album':
      placeholderText = '새 앨범명을 입력해주세요.';
      break;
    case 'serch':
      placeholderText = '앨범 검색';
      break;
    default:
      placeholderText = '비밀번호 재입력';
      break;
  }

  return (
    <CommonInput
      type={type}
      placeholder={placeholderText}
      lastChild={lastChild}
      height={height}
      width={width}
      fontSize={fontSize}
    />
  );
};

export default Input;

const CommonInput = styled.input`
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '50px'};
  border-radius: 9px;
  margin-bottom: ${({ lastChild }) => (lastChild ? '0px' : '20px')};
  border-radius: 9px;
  border: 1px solid #888383;
  padding: 3px 0px 3px 10px;
  font-size: ${({ fontSize }) => fontSize || '15px'};
  box-sizing: border-box;

  ${({ placeholder }) =>
    placeholder === '앨범 검색'
      ? `background: url(${magnifierURL}) no-repeat;  
      background-position: 20px; 
      padding-left: 60px`
      : ''}
`;
