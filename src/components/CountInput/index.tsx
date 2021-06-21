import { InputContainer } from "./index.style";
import { useState } from "react";

const CountInput = ({
  val = "",
  maxLength,
  placeholder,
  onChange,
  hide = false,
}) => {
  const [value1, setValue] = useState(val);
  const onCountInputChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <InputContainer>
      <input
        type="text"
        className="form-input"
        placeholder={placeholder}
        value={value1}
        onChange={onCountInputChange}
      />
      {hide ? (
        <></>
      ) : (
        <div className="count">
          <span>{value1.length}</span>/<span>{maxLength}</span>
        </div>
      )}
    </InputContainer>
  );
};

export default CountInput;
