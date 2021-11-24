import React from "react";
import styled from "styled-components";

export default function TaskInputSearch({ onValue }: any) {
  const [keywork, setKeywork] = React.useState<string>("");

  return (
    <Box>
      <input
        placeholder="keywork"
        onChange={(e) => setKeywork(e.target.value)}
      />
      <button onClick={() => onValue(keywork)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </Box>
  );
}

const Box = styled.div`
  input {
    min-width: 220px;
    border: 1px solid #0065a1;
    border-radius: 8px;
    padding: 0px 10px;
    height: 30px;
  }

  button {
    background: transparent;
    border: none;
    position: absolute;
    right: 15px;
    top: 20px;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;
