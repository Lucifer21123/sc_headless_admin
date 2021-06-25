import { useState } from "react";
import { CheckBoxItem, ListFeatureClose } from "./index.style";
import FormLabel from "components/FormLabel";
import CountInput from "components/CountInput";
import CloseIcon from "assets/icons/close-24px.svg";
const AddMetaField = ({ item, onChange, onClose }) => {
  const [metaKey_h, setMetaKey] = useState(item.metaKey);
  const [metaValue_h, setmetaValue] = useState(item.metaValue);
  const onMetaKeychange = (value) => {
    setMetaKey(value);
    onChange({ id: item.id, metaKey: metaKey_h, metaValue: metaValue_h });
  };
  const onMetaValue = (value) => {
    setmetaValue(value);
    onChange({ id: item.id, metaKey: metaKey_h, metaValue: metaValue_h });
  };
  return (
    <CheckBoxItem>
      <div className="form-single">
        <FormLabel>Key</FormLabel>
        <CountInput
          hide={true}
          placeholder="Enter Key"
          val={metaKey_h}
          maxLength={1200}
          onChange={onMetaKeychange}
        ></CountInput>
      </div>
      <div className="form-single">
        <FormLabel>Value</FormLabel>
        <CountInput
          hide={true}
          placeholder="Enter Value"
          val={metaValue_h}
          maxLength={1200}
          onChange={onMetaValue}
        ></CountInput>
      </div>
      <ListFeatureClose
        onClick={() => {
          onClose(item.id);
        }}
      >
        <img src={CloseIcon}></img>
      </ListFeatureClose>
    </CheckBoxItem>
  );
};
export default AddMetaField;
