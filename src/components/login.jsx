import Input from "./common/Input";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

import { useState } from "react";
import { toast } from "react-toastify";

const LogIn = ({ redirect }) => {
  const navigate = useNavigate;
  const { login, user } = useAuth();
  const [error, setError] = useState("");

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().min(6).required().label("Password"),
    }),
    async onSubmit(values) {
      try {
        await login(values);
        toast("Your account is connected 👏");
        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response?.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container mx-auto form col-lg-6  col-sm-12">
        <h1>Sign Up</h1>
        <br />
        <form
          noValidate
          autoComplete="off"
          onSubmit={form.handleSubmit}
          className="container col-lg-10"
        >
          {error && <div className="alert alert-danger">{error}</div>}
          <Input
            type="email"
            label="Email"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
          />

          <Input
            type="password"
            label="Password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          />
          <br />
          <div className="my-2 ">
            <button className="btn btn-primary col-12">Log In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
