import { Piority } from "configs/enum";
import styled from "styled-components";

export default function LabelStatus(props: any) {
    if (props.status === Piority.STATUS_HIGH) {
        return <LabelHigh>hight</LabelHigh>;
    }

    if (props.status === Piority.STATUS_LOW) {
        return <LabelLow>low</LabelLow>;
    }

    if (props.status === Piority.STATUS_NORMAL) {
        return <LabelNormal>Normal</LabelNormal>;
    }
    return null;
}

const LabelHigh = styled.div`
    background-color: #ff5722;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 0.2em 0.5em;
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
