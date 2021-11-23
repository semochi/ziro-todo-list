import styled from "styled-components";

export default function TaskItem({ name }: any) {
  return (
    <BoxItem>
      <BoxItemCheck>
        <input type="checkbox" />
        <span>{name}</span>
      </BoxItemCheck>
      <BoxItemButton>
        <button>Remove</button>
        <button>Detail</button>
      </BoxItemButton>
    </BoxItem>
  );
}

const BoxItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  padding: 1em 0.5em;
  margin-bottom: 1em;
  border-radius: 0.5em;
`;
const BoxItemCheck = styled.div``;
const BoxItemName = styled.div``;
const BoxItemButton = styled.div``;
