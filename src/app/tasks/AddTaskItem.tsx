import styled from "styled-components";
import FieldDate from "common/fields/FieldDate";
import { FormControl, FormGroup, FormInit, FormLabel } from "common/Form";
import FieldInput from "common/fields/FieldInput";
import FieldTextarea from "common/fields/FieldTextarea";
import FieldSelect from "common/fields/FieldSelect";
import { NewTaskSchema } from "app/_schema/schema-tasks";
import { toast } from "react-toastify";
interface Props {
    onCreateTasks: (values: any) => void | undefined;
}
const VALUE_DEFAULT = {
    title: "",
    description: "",
    date: "",
    piority: "normal",
};
export default function AddTaskItem({ onCreateTasks }: Props) {
    const handleCreate = (values: any, { resetForm }: any) => {
        onCreateTasks(values);
        toast.success(<small>Success, Created task</small>)
        resetForm();
    };

    return (
        <BoxWrapper>
            <BoxForm>
                <BoxFormHeader>New Task</BoxFormHeader>
                <FormInit init={VALUE_DEFAULT} schema={NewTaskSchema} onSubmit={handleCreate}>
                    {({ errors }: any) => (
                        <FormInit.Content>
                            <FormControl>
                                <FormLabel title="Title" isRequire error={errors.title} />
                                <FieldInput name="title" placeholder="Title" error={errors.title} />
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
                        </FormInit.Content>
                    )}
                </FormInit>
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
    background: #0065a1;
    color: #fff;
    border: none;
    border-radius: 0.3em;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
`;
