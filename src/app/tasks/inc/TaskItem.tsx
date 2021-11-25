import React from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsInfoCircle } from "react-icons/bs";
import { UpdateTaskSchema } from "app/_schema/schema-tasks";
import LabelStatus from "common/LabelStatus";
import { Button } from "common/Button";
import { FormControl, FormGroup, FormInit, FormLabel } from "common/Form";
import FieldInput from "common/fields/FieldInput";
import FieldTextarea from "common/fields/FieldTextarea";
import FieldDate from "common/fields/FieldDate";
import FieldSelect from "common/fields/FieldSelect";
import { Piority } from "configs/enum";

const OPTIONS_PIORITY = [Piority.STATUS_LOW, Piority.STATUS_HIGH, Piority.STATUS_NORMAL];

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
            let parentValue = elm.parentElement.classList.value;
            // clear class parent
            let parentTargets = Array.from(document.getElementsByClassName(parentValue));
            parentTargets.forEach((elm: any) => elm.classList.remove("active"));
            // clear
            let targets = Array.from(document.getElementsByClassName(value));
            targets.forEach((elm: any) => elm.classList.remove("show"));
        }
        elm.parentElement.classList.toggle("active");
        elm.classList.toggle("show");
    };

    // Todo : Clear checked if change props task

    React.useLayoutEffect(() => {
        let targets = Array.from(document.querySelectorAll("input[type=checkbox]"));
        targets.forEach((elm: any) => {
            elm.checked = false;
        });
    }, [task]);

    const handleUpdate = (value: any) => onClickUpdate(value);

    return (
        <BoxWrapper>
            <BoxItem isDone={isDone}>
                <BoxItemCheck>
                    <input type="checkbox" value={index - 1} onChange={onSelect} />
                    <BoxItemTitle>
                        <LabelStatus status={task.piority} />
                        <p>{task.title}</p>
                    </BoxItemTitle>
                </BoxItemCheck>
                <BoxItemButton>
                    <Button onClick={onClickRemove} icon={<BsFillTrashFill />} />
                    <Button onClick={handleDetail} icon={<BsInfoCircle />} />
                </BoxItemButton>
            </BoxItem>
            <BoxShowDetail ref={toggleRef}>
                <FormInit init={task} schema={UpdateTaskSchema} onSubmit={handleUpdate}>
                    {({ errors }: any) => (
                        <FormInit.Content>
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
                                    <FieldSelect options={OPTIONS_PIORITY} />
                                </FormControl>
                            </FormGroup>
                            <FormControl>
                                <button type="submit">Update</button>
                            </FormControl>
                        </FormInit.Content>
                    )}
                </FormInit>
            </BoxShowDetail>
        </BoxWrapper>
    );
}

interface StyleProps {
    isDone?: Boolean;
}

const BoxWrapper = styled.section`
    margin-bottom: 1em;
    border: 1px solid transparent;
    &.active {
        background: #0065a105;
        border-radius: 8px;
        border: 1px solid #e9e9e959;
    }
    .show {
        display: block !important;
    }
`;

const BoxItem = styled.div<StyleProps>`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #f5f5f5;
    width: 100%;
    height: 3em;
    padding: 0em 0.5em;
    border-radius: 0.3em;
    align-items: center;
    border-left: ${({ isDone }) => (isDone ? "3px solid #0065a1" : null)};
    box-shadow: 0px 1px 1px #0001;
    margin-bottom: 0.3em;
`;

const BoxItemTitle = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: row;
    color: #fff;
    margin: 0 0.5em;

    p {
        font-size: 0.8rem;
        line-height: 1rem;
        margin: 0;
        font-weight: 600;
        color: #3a3a3a;
        letter-spacing: 0.5px;
        margin: 0 0.5em;
    }
`;
const BoxItemCheck = styled.div`
    display: flex;
    align-items: center;
`;
const BoxItemButton = styled.div``;

const BoxShowDetail = styled.div`
    margin-bottom: 0.5em;
    display: none;
    padding: 10px;
    background: #fafafa;
    border-radius: 5px;
    button {
        width: 100%;
        padding: 0.8em;
        margin-top: 1em;
        background: #0065a1;
        color: #fff;
        border: none;
        border-radius: 0.3em;
        font-weight: 600;
        -webkit-letter-spacing: 0.5px;
        -moz-letter-spacing: 0.5px;
        -ms-letter-spacing: 0.5px;
        letter-spacing: 0.5px;
        font-size: 0.8rem;
    }
`;
