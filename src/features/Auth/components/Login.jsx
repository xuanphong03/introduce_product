import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Login.propTypes = {};

function Login({ onCloseForm }) {
  const dispatch = useDispatch();

  const handleLoginFormSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("Login successfully: ", user);
      if (onCloseForm) {
        onCloseForm();
      }
      toast.success("Sign in successfully!!!");
    } catch (error) {
      console.log("Failed to login: ", error);
      toast.error("Error!!!");
    }
  };
  return <LoginForm onClose={onCloseForm} onSubmit={handleLoginFormSubmit} />;
}

export default Login;
