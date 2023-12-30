import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

function InputField({ id, label, placeholder, register, errorMessage }) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        {...register}
        placeholder={placeholder}
        type="text"
        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <span className="text-red-500">{errorMessage}</span>
    </div>
  );
}

export default InputField;
