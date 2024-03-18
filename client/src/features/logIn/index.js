import styled from 'styled-components';
import Logo from '../../components/Elements/Logo';
import Input from '../../components/Elements/Input';
import CommonButton from '../../components/Elements/Button';

const LogIn = () => {
  return (
    <Wrapper>
      <Logo fontSize="40px" />
      <InputWrapper>
        <Input placeholder="email" />
        <Input placeholder="password" lastChild="lastChild" />
      </InputWrapper>
      <CheckWrapper>
        <Check type="checkbox" />
        <Span>아이디 저장</Span>
      </CheckWrapper>
      <Button title="로그인" height="50px" width="400px" fontSize="18px" />
      <A href="/register">회원가입</A>
    </Wrapper>
  );
};

export default LogIn;

const Wrapper = styled.div`
  position: absolute;
  top: 292px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
`;

const Button = styled(CommonButton)`
  margin-bottom: 20px;
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #535151;
`;
const Span = styled.span`
  font-size: 15px;
  color: #535151;
`;
const Check = styled.input`
  margin: 2px 5px 0 0;
`;
