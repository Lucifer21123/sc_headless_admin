import styled from "styled-components";

type StyledProps = {
  TextColor: string;
  HoverColor: string;
  FontSize: string;
  FontWeight: string;
};

const HoverContainer = styled.span<StyledProps>`
  color: ${(props) => props.TextColor};
  font-size: ${(props) => props.FontSize};
  font-weight: ${(props) => props.FontWeight};
  display: block;
  :hover {
    color: ${(props) => props.TextColor};
  }
`;

const HoverText = ({
  TextColor,
  HoverColor,
  FontSize,
  FontWeight,
  children,
}) => {
  return (
    <HoverContainer
      TextColor={TextColor}
      HoverColor={HoverColor}
      FontSize={FontSize}
      FontWeight={FontWeight}
    >
      {children}
    </HoverContainer>
  );
};

export default HoverText;
