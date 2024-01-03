import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField/InputField";
import OptionField from "../../../../components/form-control/OptionField/OptionField";
import ImageField from "../../../../components/form-control/ImageField/ImageField";

FormCreateProduct.propTypes = {
  onSubmit: PropTypes.func,
};

function FormCreateProduct({ onSubmit }) {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter product name."),
    price: yup
      .number()
      .required("Please enter product price.")
      .moreThan(0, "The product's price must be greater than 0"),
    picture: yup
      .mixed()
      .test("required", "Please select a picture", (value) => {
        return value && value.length;
      }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    console.log(data);
    if (onSubmit) {
      await onSubmit(data);
    }
  };

  return (
    <div className="min-[400px] bg-white mx-auto w-1/2 px-8 py-4 rounded-md">
      <h2 className="uppercase font-semibold text-xl text-center">
        Create new product
      </h2>
      <form className="mt-6" onSubmit={handleSubmit(formSubmit)}>
        <InputField
          name="name"
          type="text"
          label="Product name"
          placeholder="Enter product name..."
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <InputField
          name="price"
          label="Price"
          type="number"
          placeholder="Enter price of product..."
          register={{ ...register("price", { value: 0 }) }}
          errorMessage={errors.price?.message}
        />

        <div className="flex items-center justify-between">
          <OptionField
            name="color"
            label="Color"
            register={{ ...register("color") }}
            options={["White", "Black", "Red", "Silver"]}
          />

          <OptionField
            name="country"
            label="Coutry"
            register={{ ...register("country") }}
            options={["USA", "Japan", "China", "Korea", "UK", "Rusia"]}
          />
        </div>

        <ImageField
          name="picture"
          id="fileUpload"
          register={{ ...register("picture") }}
          errorMessage={errors.picture?.message}
        />

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCreateProduct;
