import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
// const validate = (values) => {
//   console.log("values", values);
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Name is required field";
//   }
//   if (!values.email) {
//     errors.email = "Email is required field";
//   }
//   //   else if (
//   //     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/i.test(values.email)
//   //   ) {
//   //     errors.email = "Invalid email address";
//   //   }
//   if (!values.channel) {
//     errors.channel = "channel is required field";
//   }

//   return errors;
// };

const onSubmit = (value) => {
  console.log(value);
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email format").required("required"),
  channel: Yup.string().required("required"),
});

const BasicForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("formik errors", formik.errors);
  return (
    <div className="main-from">
      <form onSubmit={formik.handleSubmit}>
        <div className="element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="element">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            value={formik.values.channel}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
