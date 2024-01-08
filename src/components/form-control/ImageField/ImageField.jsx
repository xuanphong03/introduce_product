import PropTypes from "prop-types";
import React from "react";

ImageField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

function ImageField({ id, name, label, register, errorMessage }) {
  return (
    <div className="mt-2 py-2">
      <label className="block text-sm font-semibold text-gray-800" htmlFor={id}>
        {label}
        <span className="font-light text-sm"> (required)</span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        {...register}
        accept="image/png, image/jpeg"
        className="text-sm  block mt-2 cursor-pointer"
      />

      {errorMessage && (
        <span className="text-red-500 text-xs px-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default ImageField;
