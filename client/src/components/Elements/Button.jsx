import styled from 'styled-components';

const CommonButton = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 10px;
  border: none;
  align-items: center;
  border-radius: 9px;
  border: ${({ border }) => (border ? '1px solid #C9C5C5' : '')};
  background-color: ${({ backgroundColor }) => backgroundColor || '#2F80ED'};
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  height: ${({ height }) => height || '30px'};
  width: ${({ width }) => width || '300px'};
  cursor: pointer;
`;

const Button = ({
  type,
  className,
  title,
  backgroundColor,
  color,
  fontSize,
  height,
  width,
  onClick,
  border,
}) => {
  return (
    <CommonButton
      type={type}
      className={className}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      height={height}
      width={width}
      onClick={onClick}
      border={border}
    >
      {title}
    </CommonButton>
  );
};

export default Button;
