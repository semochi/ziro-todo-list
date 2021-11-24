import { Field } from "formik";
import styled from "styled-components";
const DATE_CURRENT = new Date().toISOString().split("T")[0];
export default function FieldDate(props: any) {
  return (
    <InputStyle
      id="date"
      type="date"
      min={DATE_CURRENT}
      name="date"
      placeholder="date"
      {...props}
    />
  );
}

const InputStyle = styled(Field)`
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  padding: 3px 10px;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
`;
