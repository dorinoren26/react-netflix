import Input from "./common/Input";

import Joi from "joi";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createCard } from "../services/cardService";
import { toast } from "react-toastify";

const CreateCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").uri().label("Image"),
    }),
    async onSubmit(values) {
      const { bizImage, ...body } = values;

      if (bizImage) {
        body.bizImage = bizImage;
      }
      try {
        await createCard(body);
        toast("A new card was created");
        navigate("/my-cards");
      } catch ({ response }) {
        if (response?.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <div className="mx-auto form col-lg-6  col-sm-12">
        <h1>Create Card</h1>
        <br />
        <div className="form ">
          <form
            noValidate
            autoComplete="off"
            onSubmit={form.handleSubmit}
            className="container col-lg-10"
          >
            {error && <div className="alert alert-danger">{error}</div>}

            <Input
              type="text"
              label="Name"
              error={form.touched.bizName && form.errors.bizName}
              {...form.getFieldProps("bizName")}
            />
            <Input
              type="text"
              label="Description"
              error={form.touched.bizDescription && form.errors.bizDescription}
              {...form.getFieldProps("bizDescription")}
            />
            <Input
              type="text"
              label="Address"
              error={form.touched.bizAddress && form.errors.bizAddress}
              {...form.getFieldProps("bizAddress")}
            />
            <Input
              type="text"
              label="Phone"
              error={form.touched.bizPhone && form.errors.bizPhone}
              {...form.getFieldProps("bizPhone")}
            />
            <Input
              type="text"
              label="Image"
              error={form.touched.bizImage && form.errors.bizImage}
              {...form.getFieldProps("bizImage")}
            />
            <br />
            <div className="my-2 ">
              <button className="btn btn-primary col-12">Create Card</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
