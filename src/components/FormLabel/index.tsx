import styled from "styled-components";
type FormLabelContentProps = {
  styleproperty: any;
};
const FormLabelContent = styled.span<FormLabelContentProps>`
  font-size: ${(props) => props.styleproperty.fontSize};
  font-weight: ${(props) => props.styleproperty.Weight};
  margin-bottom: ${(props) => props.styleproperty.marginBottom};
  color: ${(props) => props.styleproperty.Color};
  padding-left: 8px;
`;
const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};
const FormLabel = ({ styleproperty = styleProperty, children }) => {
  return (
    <FormLabelContent styleproperty={styleproperty}>
      {children}
    </FormLabelContent>
  );
};

export default FormLabel;
