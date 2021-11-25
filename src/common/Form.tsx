import { Form, Formik } from "formik";
import styled from "styled-components";
import { FormControlProps, FormGroupProps, FormLabelProps } from "./types";

export function FormInit({ init, children, schema, onSubmit }: any) {
    return (
        <Formik initialValues={init} validationSchema={schema} onSubmit={onSubmit}>
            {children}
        </Formik>
    );
}

FormInit.Content = ({ children }: any) => {
    return <Form>{children}</Form>;
};

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
export function FormLabel({ title, isRequire, error }: FormLabelProps) {
    return (
        <FormLabelStyle>
            {title} : {isRequire && <sup>*</sup>} <small>{error}</small>
        </FormLabelStyle>
    );
}

const FormLabelStyle = styled.label`
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.6em;
    color: #4a4a4a;
    sup {
        color: #f44336;
    }
    small {
        color: #f44336;
    }
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
