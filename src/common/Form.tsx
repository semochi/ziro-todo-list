import styled from "styled-components";
import { FormControlProps, FormGroupProps, FormLabelProps } from "./types";

/**
 * Form Group
 * @param param0
 * @returns
 */
export function FormGroup({ children }: FormGroupProps) {
  return <FormGroupStyle>{children}</FormGroupStyle>;
}

const FormGroupStyle = styled.div`
  display: flex;
  gap: 1em;
  & > div {
    flex: 1;
  }
`;

/**
 * Form Label
 * @param param0
 * @returns
 */
export function FormLabel({ title }: FormLabelProps) {
  return <FormLabelStyle>{title}</FormLabelStyle>;
}

const FormLabelStyle = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.6em;
  color: #4a4a4a;
`;

/**
 * Form Control
 * @param param0
 * @returns
 */
export function FormControl({ children }: FormControlProps) {
  return <FormControlStyle>{children}</FormControlStyle>;
}

const FormControlStyle = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0.5em;
`;
