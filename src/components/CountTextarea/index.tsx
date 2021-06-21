import { CountTextAreaContent } from "./index.style";
import { useState } from "react";

const CountTextArea = ({ placeholder, maxlength, val, onChange }) => {
  const [value, setvalue] = useState(val);
  const onTextAreaChange = (e) => {
    setvalue(e.target.value);
    onChange(value);
  };

  return (
    <CountTextAreaContent>
      <textarea
        placeholder={placeholder}
        className="form-input"
        value={value}
        onChange={onTextAreaChange}
      ></textarea>
      <div className="count">
        <span>{value.length}</span>/<span>{maxlength}</span>
      </div>
    </CountTextAreaContent>
  );
};

export default CountTextArea;
