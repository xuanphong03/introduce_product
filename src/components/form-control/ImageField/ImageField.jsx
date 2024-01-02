import PropTypes from "prop-types";
import React, { useState } from "react";
import { THUMBNAIL_PLACEHOLDER_150 } from "../../../constants/common";

ImageField.propTypes = {
  id: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

function ImageField({ id, label, register, errorMessage }) {
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
        className="text-sm block my-2 cursor-pointer"
        type="file"
        id={id}
        name="avatar"
        accept="image/png, image/jpeg"
        register={{
          onChange: (e) => {
            register("image").onChange(e);
            handleFileChange(e);
          },
        }}
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
            width={100}
          />
        )}
      </div>
    </div>
  );
}
export default ImageField;
