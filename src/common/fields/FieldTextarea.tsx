import { Field } from "formik";
import styled from "styled-components";

export default function FieldTextarea(props: any) {
  console.log(props.error);
  return (
    <ShortDescription error={props.error}>
      <Field {...props} as="textarea" />
    </ShortDescription>
  );
}
interface Props {
  error?: boolean;
}
const ShortDescription = styled.div<Props>`
  textarea {
    border: ${({ error }) => (error ? "1px solid #f44336" : "1px solid #ddd")};
    box-sizing: border-box;
    width: 100%;
    line-height: 35px;
    border-radius: 5px;
    padding: 3px 10px;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
  }
`;
