import React, { useState } from "react";
import PropTypes from "prop-types";
import { THUMBNAIL_PLACEHOLDER_150 } from "../../../constants";
ImageField.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};
function ImageField({ id, name, label, register, errorMessage }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <label
        className="block text-sm font-semibold text-gray-800 mr-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="file"
        {...register}
        accept="image/png, image/jpeg"
        className="text-sm block my-2 cursor-pointer"
        onChange={handleFileChange}
      />
      <div className="round">
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt=""
            className="h-[150px] w-[150px] rounded"
          />
        ) : (
          <img
            className="h-[150px] w-[150px] rounded"
            src={THUMBNAIL_PLACEHOLDER_150}
            alt=""
          />
        )}
      </div>
      {errorMessage && (
        <span className="text-red-500 text-xs px-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default ImageField;
