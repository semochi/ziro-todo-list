import styled from "styled-components";

interface Props {
  name?: string;
  icon?: any;
  outline?: boolean;
  onClick: () => void;
}

export function Button({ name, icon, onClick }: Props) {
  return (
    <ButtonStyle onClick={onClick}>
      {icon}
      {name}
    </ButtonStyle>
  );
}

export function ButtonAction({ name, icon, outline, onClick }: Props) {
  return (
    <ButtonActionStyle onClick={onClick} outline={outline}>
      {icon}
      {name}
    </ButtonActionStyle>
  );
}

const ButtonStyle = styled.button`
  border: none;
  padding: 0.5em;
  margin-left: 0.3em;
  border-radius: 5px;
  color: #4a4a4a;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 1.3em;
    height: 1.3em;
  }
  &:hover {
    svg {
      fill: #0065a1;
    }
  }
`;
interface StyleProps {
  outline?: boolean;
}
const ButtonActionStyle = styled.button<StyleProps>`
  border: ${({ outline }) =>
    outline ? "1px solid #0065a1" : "1px solid #ddd"};
  background: ${({ outline }) => (outline ? "#fff" : "#0065a1")};
  color: ${({ outline }) => (outline ? "#0065a1" : "#fff")};
  padding: 0.5em 1.5em;
  margin-left: 0.3em;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: 0.3s;
  svg {
    width: 1em;
    height: 1em;
    margin-right: 0.3em;
  }
  &:hover {
    background: ${({ outline }) => (outline ? "#0065a1ed" : "#0065a1")};
    color: ${({ outline }) => (outline ? "#fff" : "#fff")};
    opacity: 1;
    svg {
      fill: ${({ outline }) => (outline ? "#fff" : "#fff")};
    }
  }
`;
