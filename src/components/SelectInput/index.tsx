import {
  SelectInputContainer,
  InputContainer,
  SelectContainer,
} from "./index.style";

import { useState } from "react";

import CountInput from "components/CountInput";
import Select from "components/Select";

const SelectInput = ({
  val,
  maxLength,
  placeholder,
  onInputChange,
  options,
  label,
  onSelect,
}) => {
  const [focus, setfocus] = useState(false);
  return (
    <SelectInputContainer className={focus ? "focus" : ""}>
      <InputContainer
        onMouseEnter={() => {
          setfocus(!focus);
        }}
        onMouseLeave={() => {
          setfocus(!focus);
        }}
      >
        <CountInput
          val={val}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onInputChange}
          hide={true}
        ></CountInput>
      </InputContainer>
      <SelectContainer>
        <Select list={options} label={label} click={onSelect}></Select>
      </SelectContainer>
    </SelectInputContainer>
  );
};

export default SelectInput;
