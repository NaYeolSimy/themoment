import styled from 'styled-components';
import Logo from '../../components/Elements/Logo';
import Input from '../../components/Elements/Input';
import CommonButton from '../../components/Elements/Button';


const Register = () => {
  return (
    <Wrapper>
      <Logo fontSize="40px" />
      <InputWrapper>
        <form action= 'http://localhost:8080/auth/register' method="POST">
          <label for="name" />
          <Input type="text" placeholder="name" name="name" />
          <label for="email" />
          <Input type="email" placeholder="email" name="email" />
          <label for="password" />
          <Input type="password" placeholder="password" name="password" />
          <label for="passwordConfirm" />
          <Input type="password" name="passwordConfirm" />
          <Button
          type="submit"
          title="회원가입"
          height="50px"
          width="400px"
          fontSize="18px"
        />
        <A href="/">취소</A>
        </form>
        
      </InputWrapper>
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
  text-align: center;
`;
