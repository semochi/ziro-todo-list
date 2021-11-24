import { Formik, Form } from "formik";

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

const NewTaskSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  piority: Yup.string().required("Required"),
});

export default function AddTaskItem({ onCreateTasks }: Props) {
  const handleCreateTask = (values: any, { resetForm }: any) => {
    onCreateTasks(values);
    resetForm();
  };

  return (
    <BoxWrapper>
      <BoxForm>
        <BoxFormHeader>New Task</BoxFormHeader>
        <Formik
          initialValues={{
            title: "",
            description: "",
            date: "",
            piority: "normal",
          }}
          validationSchema={NewTaskSchema}
          onSubmit={handleCreateTask}
        >
          {({ errors }) => (
            <Form>
              <FormControl>
                <FormLabel title="Title" isRequire error={errors.title} />
                <FieldInput
                  name="title"
                  placeholder="Title"
                  error={errors.title}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  title="Description"
                  isRequire
                  error={errors.description}
                />
                <FieldTextarea
                  name="description"
                  placeholder="Description"
                  error={errors.description}
                />
              </FormControl>
              <FormGroup>
                <FormControl>
                  <FormLabel title="Due Date" isRequire error={errors.date} />
                  <FieldDate name="date" error={errors.date} />
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
          )}
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
