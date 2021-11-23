import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import styled from "styled-components";
import FieldSelect from "../../common/fields/FieldSelect";
import FieldTextarea from "../../common/fields/FieldTextarea";
import FieldInput from "../../common/fields/FieldInput";
import { FormControl, FormGroup, FormLabel } from "../../common/Form";
import FieldDate from "../../common/fields/FieldDate";
interface MyFormValues {
  firstName: string;
}

export default function AddTaskItem() {
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <BoxWrapper>
      <BoxForm>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <FormControl>
              <FormLabel title="Title" />
              <FieldInput id="title" name="title" placeholder="title" />
            </FormControl>
            <FormControl>
              <FormLabel title="Description" />
              <FieldTextarea
                id="description"
                name="description"
                placeholder="description"
              />
            </FormControl>
            <FormGroup>
              <FormControl>
                <FormLabel title="Due Date" />
                <FieldDate />
              </FormControl>
              <FormControl>
                <FormLabel title="Piority" />
                <FieldSelect options={["low", "high", "normal"]} />
              </FormControl>
            </FormGroup>
            <FormControl>
              <button type="submit">Submit</button>
            </FormControl>
          </Form>
        </Formik>
      </BoxForm>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  border-radius: 0.6em;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 2em;
  padding: 1em;
  .box {
    background-color: #fff;
  }
  @media (min-width: 766px) {
    flex: 1;
  }
`;

const BoxForm = styled.div`
  background-color: #fff;
  padding: 1em;
  border-radius: 0.5em;
`;
