import React from "react";
import styled from "styled-components";
import FieldInput from "../../../common/fields/FieldInput";
import { Formik, Form } from "formik";
import FieldTextarea from "../../../common/fields/FieldTextarea";
import { FormControl, FormGroup, FormLabel } from "../../../common/Form";
import FieldSelect from "../../../common/fields/FieldSelect";
import FieldDate from "../../../common/fields/FieldDate";

import * as Yup from "yup";
const UpdateTaskSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
});

export default function TaskItem({
  index,
  task,
  isDone,
  onSelect,
  onClickRemove,
  onClickUpdate,
}: any) {
  const toggleRef = React.useRef<HTMLDivElement>(null);


  // Todo : hand button detail

  const handleDetail = () => {
    let elm: any = toggleRef.current;
    // remove all class show
    if (!elm.classList.contains("show")) {
      let { value } = elm.classList;
      let targets = Array.from(document.getElementsByClassName(value));
      targets.forEach((elm: any) => elm.classList.remove("show"));
    }
    elm.classList.toggle("show");
  };

  // Todo : Clear checked if change props task

  React.useLayoutEffect(() => {
    let targets = Array.from(document.querySelectorAll("input[type=checkbox]"));
    targets.forEach((elm: any) => {
      elm.checked = false;
    });
  }, [task]);

  return (
    <BoxWrapper>
      <BoxItem>
        <BoxItemCheck>
          <input type="checkbox" value={index - 1} onChange={onSelect} />
          <BoxItemTitle>
            <i>{task.date}</i>
            <p>{task.title}</p>
            {isDone ? "Done" : null}
          </BoxItemTitle>
        </BoxItemCheck>
        <BoxItemButton>
          <button onClick={onClickRemove}>Remove</button>
          <button onClick={handleDetail}>Detail</button>
        </BoxItemButton>
      </BoxItem>
      <BoxShowDetail ref={toggleRef}>
        <Formik
          initialValues={task}
          validationSchema={UpdateTaskSchema}
          onSubmit={(value) => onClickUpdate(value)}
        >
          {({ errors }) => (
            <Form>
              <header>
                <h6>{`#${index}-${task.title}`}</h6>
              </header>
              <FormControl>
                <FormLabel title="Title" error={errors.title} />
                <FieldInput name="title" error={errors.title} />
              </FormControl>
              <FormControl>
                <FormLabel title="Description" error={errors.description} />
                <FieldTextarea name="description" error={errors.description} />
              </FormControl>
              <FormGroup>
                <FormControl>
                  <FormLabel title="Due Date" error={errors.date} />
                  <FieldDate name="date" error={errors.date} />
                </FormControl>
                <FormControl>
                  <FormLabel title="Piority" />
                  <FieldSelect options={["low", "high", "normal"]} />
                </FormControl>
              </FormGroup>
              <FormControl>
                <button type="submit">Update</button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </BoxShowDetail>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.section`
  .show {
    display: block !important;
  }
`;

const BoxItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #98c1d9;
  width: 100%;
  height: 3em;
  padding: 0em 0.5em;
  margin-bottom: 1em;
  border-radius: 0.5em;
  align-items: center;
`;

const BoxItemTitle = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  margin-left: 0.5em;
  i {
    font-size: 0.8rem;
    color: #222222;
  }
  p {
    font-size: 0.9rem;
    line-height: 1rem;
    margin: 0;
    font-weight: 700;
    color: #222222;
  }
`;
const BoxItemCheck = styled.div`
  display: flex;
  align-items: center;
`;
const BoxItemButton = styled.div``;

const BoxShowDetail = styled.div`
  margin-bottom: 2em;
  display: none;
`;
