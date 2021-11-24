import { Formik, Form, FormikHelpers } from "formik";

import * as Yup from "yup";
import styled from "styled-components";
import FieldSelect from "../../common/fields/FieldSelect";
import FieldTextarea from "../../common/fields/FieldTextarea";
import FieldInput from "../../common/fields/FieldInput";
import { FormControl, FormGroup, FormLabel } from "../../common/Form";
import FieldDate from "../../common/fields/FieldDate";

interface Props {
  onCreateTasks: (values: any) => void | undefined;
}

export default function AddTaskItem({ onCreateTasks }: Props) {
  const handleCreateTask = (values: any) => {
    onCreateTasks(values);
  };

  return (
    <BoxWrapper>
      <BoxForm>
        <BoxFormHeader>
          New Task
        </BoxFormHeader>
        <Formik
          initialValues={{
            title: "",
            description: "",
            date: "",
            piority: "normal",
          }}
          onSubmit={handleCreateTask}
        >
          <Form>
            <FormControl>
              <FormLabel title="Title" />
              <FieldInput name="title" placeholder="title" />
            </FormControl>
            <FormControl>
              <FormLabel title="Description" />
              <FieldTextarea name="description" placeholder="description" />
            </FormControl>
            <FormGroup>
              <FormControl>
                <FormLabel title="Due Date" />
                <FieldDate name="date" />
              </FormControl>
              <FormControl>
                <FormLabel title="Piority" />
                <FieldSelect
                  name="piority"
                  options={["low", "high", "normal"]}
                />
              </FormControl>
            </FormGroup>
            <FormControl>
              <Button type="submit">Submit</Button>
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
  @media (min-width: 766px) {
    position: sticky;
    top: 0;
    flex: 1;
  }
`;

const BoxForm = styled.div`
  background-color: #fff;
  padding: 1em;
  border-radius: 0.5em;
`;
const BoxFormHeader = styled.h2`
  margin: 0;
  font-size: 1.2rem;
    text-align: center;
  color: #4a4a4a;
`;

const Button = styled.button`

width: 100%;
    padding: 0.8em;
    margin-top: 1em;
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 0.3em;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
`;