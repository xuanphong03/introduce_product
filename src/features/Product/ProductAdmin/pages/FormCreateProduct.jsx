import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField/InputField";
import ImageField from "../../../../components/form-control/ImageField/ImageField";
import SelectField from "../../../../components/form-control/SelectField/SelectField";

FormCreateProduct.propTypes = {
  onSubmit: PropTypes.func,
};

const COLOR_LIST = ["White", "Black", "Red", "Silver"];
const BRAND_LIST = [
  "Rolex",
  "Casio",
  "Cartier",
  "Calvin Klein",
  "Longines",
  "Jaeger-LeCoultre",
  "Apple",
];
const COUNTRY_LIST = ["USA", "Japan", "China", "Korea", "UK", "Switzerland"];

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
    <div className="min-[400px] bg-white mx-auto w-1/2 px-8 py-2 rounded-md">
      <h2 className="uppercase font-semibold text-xl text-center">
        Create new product
      </h2>
      <form className="mt-6" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex justify-between">
          <InputField
            name="name"
            type="text"
            label="Product name"
            placeholder="Enter product name..."
            register={{ ...register("name") }}
            errorMessage={errors.name?.message}
            className="w-2/3"
          />
          <InputField
            name="price"
            label="Price"
            type="number"
            placeholder="Enter price of product..."
            register={{ ...register("price", { value: 0 }) }}
            errorMessage={errors.price?.message}
            className="w-1/3"
          />
        </div>

        <div className="flex items-center justify-between">
          <SelectField
            name="color"
            label="Color"
            register={{ ...register("color") }}
            options={COLOR_LIST}
          />

          <SelectField
            name="brand"
            label="Brand"
            register={{ ...register("brand") }}
            options={BRAND_LIST}
          />

          <SelectField
            name="country"
            label="Coutry"
            register={{ ...register("country") }}
            options={COUNTRY_LIST}
          />
        </div>

        <ImageField
          label="Choose a picture"
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
