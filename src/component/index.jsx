import React from "react";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
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
  console.log("value", value);
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email format").required("required"),
  channel: Yup.string().required("required"),
});

const BasicForm = () => {
  //remove this when uses Formik
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //   });
  return (
    <div className="main-from">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="element">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              //Remove properties by adding getFieldProps
              // value={formik.values.name}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              //{...formik.getFieldProps("name")}---after replacing input with Field
            />
            {/* {formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
            ---remove after adding Error message */}
            <ErrorMessage name="name" />
          </div>
          <div className="element">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              //Remove properties by adding getFieldProps
              // value={formik.values.email}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              //{...formik.getFieldProps("email")}---after replacing input with Field
            />
            {/* {formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null} */}
            <ErrorMessage name="email" />
          </div>
          <div className="element">
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              //Remove properties by adding getFieldProps
              // value={formik.values.channel}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // {...formik.getFieldProps("channel")}---after replacing input with Field
            />
            {/* {formik.touched.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null} */}
            <ErrorMessage name="channel" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
