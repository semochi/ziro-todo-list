import React from "react";
import styled from "styled-components";
import { BsSearch, BsX } from "react-icons/bs";
export default function TaskInputSearch({ isSearch, onValue, onClose }: any) {
    const [keywork, setKeywork] = React.useState<string>("");

    const ButtonClose = () => (
        <button onClick={onClose}>
            <BsX />
        </button>
    );

    const ButtonSearch = () => (
        <button onClick={() => onValue(keywork)}>
            <BsSearch />
        </button>
    );

    return (
        <Box>
            <input placeholder="keywork" onChange={(e) => setKeywork(e.target.value)} />
            {isSearch ? <ButtonClose /> : <ButtonSearch />}
        </Box>
    );
}

const Box = styled.div`
    input {
        min-width: 220px;
        border: 1px solid #0065a1;
        border-radius: 5px;
        padding: 0px 10px;
        height: 30px;
    }

    button {
        background: transparent;
        border: none;
        position: absolute;
        right: 15px;
        top: 22px;
        height: 40px;
        width: 40px;
        cursor: pointer;
    }
    svg {
        width: 1.1em;
        height: 1.1em;
    }
`;
