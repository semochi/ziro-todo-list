import { Field } from "formik";
import styled from "styled-components";

const FieldSelect = (props: any) => {
  let optionsProps: string[] = props.options || [];

  return (
    <Select>
      <Field {...props} as="select" name="piority">
        {optionsProps.map((label, i) => (
          <option value={label} key={i}>
            {label}
          </option>
        ))}
      </Field>
    </Select>
  );
};

export default FieldSelect;

const Select = styled.div`
  select {
    border: 1px solid #ddd;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    padding: 3px 10px;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
  }
`;
