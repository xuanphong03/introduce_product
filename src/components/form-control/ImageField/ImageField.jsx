import PropTypes from "prop-types";
import React, { useState } from "react";

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
    <div className="my-2">
      <label className="block text-sm font-semibold text-gray-800" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="file"
        {...register}
        accept="image/png, image/jpeg"
        className="text-sm  block my-2 cursor-pointer"
        onChange={handleFileChange}
      />

      <div
        className={`flex flex-col items-center justify-center w-full h-48 ${
          !selectedFile
            ? "border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            : ""
        }`}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt=""
            className="max-h-full w-full rounded object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-6 h-6 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG (MAX. 800x400px)
            </p>
          </div>
        )}
        <input id="dropzone-file" type="file" className="hidden" />
      </div>

      {errorMessage && (
        <span className="text-red-500 text-xs px-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default ImageField;
