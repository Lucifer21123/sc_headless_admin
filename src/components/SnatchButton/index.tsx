import styled from "styled-components";

type ButtonProps = {
  width: string;
  height: string;
  fontSize: string;
  radius: string;
  bg: string;
  hoverColor: string;
  fontColor: string;
  borderColor: string;
};

const ButtonContainer = styled.div<ButtonProps>`
  cursor: pointer;
  position: relative;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  font-size: 16px;
  color: ${(props) => props.fontColor};
  transition: 0.3s;
  border-color: ${(props) => props.bg};
  background-color: ${(props) => props.bg};
  font-weight: 500;
  :hover {
    border: 2px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.hoverColor};
  }
`;

const SnatchButton = ({ setting, onClick, children }) => {
  return (
    <ButtonContainer
      width={setting.width}
      height={setting.height}
      fontSize={setting.fontSize}
      radius={setting.radius}
      bg={setting.bg}
      hoverColor={setting.hoverColor}
      fontColor={setting.fontColor}
      borderColor={setting.borderColor}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default SnatchButton;
