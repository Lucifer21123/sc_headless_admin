import styled from "styled-components";
import AddFieldImage from "assets/icons/add-field.svg";
const AddField = styled.a`
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  background-image: url(${AddFieldImage});
  color: #35558f;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  background-color: transparent;
  outline: 0;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

const AddFieldButton = ({ onClick }) => {
  return <AddField onClick={onClick}>Add field</AddField>;
};
export default AddFieldButton;
