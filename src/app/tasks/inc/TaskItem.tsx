import React from "react";
import styled from "styled-components";
import FieldInput from "../../../common/fields/FieldInput";
import { Formik, Form } from "formik";
import FieldTextarea from "../../../common/fields/FieldTextarea";
import { FormControl, FormGroup, FormLabel } from "../../../common/Form";
import FieldSelect from "../../../common/fields/FieldSelect";
import FieldDate from "../../../common/fields/FieldDate";
export default function TaskItem({
  index,
  task,
  onClickDetail,
  onClickRemove,
  onClickUpdate,
}: any) {
  const toggleRef = React.useRef<HTMLDivElement>(null);
  const handleDetail = () => {
    let elm: any = toggleRef.current;

    if (!elm.classList.contains("show")) {
      let { value } = elm.classList;
      let targets = Array.from(document.getElementsByClassName(value));
      targets.forEach((elm: any) => elm.classList.remove("show"));
    }

    elm.classList.toggle("show");
  };

  return (
    <BoxWrapper>
      <BoxItem>
        <BoxItemCheck>
          <input type="checkbox" />
          <BoxItemTitle>
            <i>{task.date}</i>
            <p>{task.title}</p>
          </BoxItemTitle>
        </BoxItemCheck>
        <BoxItemButton>
          <button onClick={onClickRemove}>Remove</button>
          <button onClick={handleDetail}>Detail</button>
        </BoxItemButton>
      </BoxItem>
      <BoxShowDetail ref={toggleRef}>
        <Formik initialValues={task} onSubmit={(value) => onClickUpdate(value)}>
          <Form>
            <header>
              <h6>{`#${index}-${task.title}`}</h6>
            </header>
            <FormControl>
              <FieldInput name="title" />
            </FormControl>
            <FormControl>
              <FieldTextarea name="description" />
            </FormControl>
            <FormGroup>
              <FormControl>
                <FormLabel title="Due Date" />
                <FieldDate name="date" />
              </FormControl>
              <FormControl>
                <FormLabel title="Piority" />
                <FieldSelect options={["low", "high", "normal"]} />
              </FormControl>
            </FormGroup>
            <button>Update</button>
          </Form>
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
