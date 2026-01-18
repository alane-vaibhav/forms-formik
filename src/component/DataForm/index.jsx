import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phNumber: "",
  address: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  phNumber: Yup.number().required("Please enter contact number"),
  // .matches(/^[0-9]+$/, "Contact number must contain only digits")
  // .min(10, "Contact number must be 10 digits")
  // .max(10, "Contact number must be 10 digits"),
  address: Yup.string().required("Please enter address"),
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
});

const onSubmit = (values) => {
  console.log("values", values);
};

const ProfileDataForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="phNumber">Phone number: </label>
          <Field type="number" id="phNumber" name="phNumber" />
          <ErrorMessage name="phNumber" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
