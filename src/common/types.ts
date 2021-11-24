import { FormikErrors } from "formik";

export interface FormLabelProps {
  title: String;
  error?: string | undefined| string[] |FormikErrors<any> | FormikErrors<any>[] ;
  isRequire? : Boolean
}

export interface FormGroupProps {
  children: JSX.Element | JSX.Element[];
}

export interface FormControlProps {
  children: JSX.Element | JSX.Element[];
}
