import * as Yup from "yup";

export const NewTaskSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    piority: Yup.string().required("Required"),
  });
  

  export  const UpdateTaskSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
  });
  