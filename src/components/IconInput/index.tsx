import { useState } from "react";
import styled from "styled-components";
type Props = {
  paddingLeft: string;
  color: string;
};
const IconInputContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  position: relative;
  & span {
    position: absolute;
    left: 10px;
    top: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    color: ${(props) => props.color};
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    opacity: 0.5;
  }
  & .form-input {
    padding-left: ${(props) => props.paddingLeft};
  }
  & input {
    :focus {
      border: 1px solid rgba(53, 85, 143, 0.5);
    }
  }
`;
const IconInput = ({
  paddingLeft = "28px",
  color = "#0b0212",
  value,
  placeholder,
  onChange,
  children,
}) => {
  const [value1_h, setvalue1_h] = useState(value);
  const onCountInputChange = (e) => {
    setvalue1_h(e.target.value);
    onChange(e.target.value);
  };
  return (
    <IconInputContainer paddingLeft={paddingLeft} color={color}>
      <input
        className="form-input"
        placeholder={placeholder}
        value={value1_h}
        onChange={onCountInputChange}
      ></input>
      <span>{children}</span>
    </IconInputContainer>
  );
};

export default IconInput;
