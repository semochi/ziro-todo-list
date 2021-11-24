import { Field } from "formik";
import styled from "styled-components";

export default function FieldInput(props: any) {
  return <InputStyle {...props} />;
}

const InputStyle = styled(Field)`
  border: ${({ error }) => (error ? "1px solid #f44336" : "1px solid #ddd")};
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  padding: 3px 10px;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
`;
