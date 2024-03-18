import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../components/Elements/Logo';
import Input from '../../components/Elements/Input';
import CommonButton from '../../components/Elements/Button';

const Register = () => {
  return (
    <Wrapper>
      <Logo fontSize="40px" />
      <InputWrapper>
        <Input placeholder="name" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input />
      </InputWrapper>
      <Button title="회원가입" height="50px" width="400px" fontSize="18px" />
      <A href="/">취소</A>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  position: absolute;
  top: 350px;
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

const Button = styled(CommonButton)`
  margin-bottom: 20px;
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #535151;
  font-size: 15px;
`;
const Check = styled.input`
  margin: 2px 5px 0 0;
`;
