import styled from "styled-components";

export default function LabelStatus(props: any) {
  if (props.status == "high") {
    return <LabelHigh>hight</LabelHigh>;
  } else if (props.status == "low") {
    return <LabelLow>low</LabelLow>;
  } else {
    return <LabelNormal>Normal</LabelNormal>;
  }
}

const LabelHigh = styled.div`
  background-color: #ff5722;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1em 0.5em;
  border-radius: 3px;
  cursor: pointer;
  min-width: 6em;
  text-align: center;
`;

const LabelLow = styled.div`
  background-color: #66bb6a;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1em 0.5em;
  border-radius: 3px;
  cursor: pointer;
  min-width: 6em;
  text-align: center;
`;
const LabelNormal = styled.div`
  background-color: #ddd;
  color: #4a4a4a;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1em 0.5em;
  border-radius: 3px;
  cursor: pointer;
  min-width: 6em;
  text-align: center;
`;
