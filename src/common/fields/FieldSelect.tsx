import { Field } from "formik";
import styled from "styled-components";

interface Props {
  value?: string;
  options: string[];
}

 const FieldSelect = ({ value, options }: Props) => {
  return (
    <Select as="select" id="date" name="date" placeholder="date" value={value}>
      {options.map((label, i) => (
        <option key={i}>{label}</option>
      ))}
    </Select>
  );
};

export default FieldSelect

const Select = styled(Field)`
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
