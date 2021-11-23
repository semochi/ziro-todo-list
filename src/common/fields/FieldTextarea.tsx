import { Field } from "formik";
import styled from "styled-components";

export default function FieldTextarea({ ...props }) {
  return <Textarea as="textarea" {...props} />;
}
const Textarea = styled(Field)`
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  line-height: 35px;
  border-radius: 5px;
  padding: 3px 10px;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
`;
