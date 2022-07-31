import Input from "./common/Input";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth.context";

const SignUpBiz = ({ redirect }) => {
  const navigate = useNavigate();
  const { createUser, user, login } = useAuth();
  const [error, setError] = useState("");

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().min(6).required().label("Password"),
      name: Joi.string().min(2).required().label("Name"),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        await login({ email: values.email, password: values.password });
        toast("Your account is ready 👏");
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

          <Input
            type="name"
            label="Name"
            {...form.getFieldProps("name")}
            error={form.touched.name && form.errors.name}
          />
          <br />
          <div className="my-2 ">
            <button className="btn btn-primary col-12">Business Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpBiz;
