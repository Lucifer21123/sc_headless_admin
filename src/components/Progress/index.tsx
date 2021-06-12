import { type } from "os";
import styled from "styled-components";

const ProgressContainer = styled.div`
  position: relative;
  width: 24px;
  height: 100px;
  background-color: #f8f9fb;
  margin-bottom: 4px;
`;

type ChartProgressProps = {
  height: string;
  color: string;
};

const ChartProgress = styled.div<ChartProgressProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
`;

const Progress = ({ height, color }) => {
  return (
    <ProgressContainer>
      <ChartProgress height={height} color={color}></ChartProgress>
    </ProgressContainer>
  );
};

export default Progress;
