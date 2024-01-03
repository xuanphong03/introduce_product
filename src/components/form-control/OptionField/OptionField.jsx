import PropTypes from "prop-types";
import React from "react";

OptionField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

function OptionField({ name, label, options, register }) {
  return (
    <div className="mt-4 mb-4 flex items-center">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-gray-800 mr-2"
      >
        {label}
      </label>
      <select
        className="cursor-pointer ml-2 px-4 py-2 border border-solid border-gray-300 rounded-md  focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        id={name}
        name={name}
        {...register}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionField;
