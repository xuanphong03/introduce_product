import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../userSlice";
import LoginForm from "./LoginForm";

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
    } catch (error) {
      console.log("Failed to login: ", error);
      toast.error("Error!!!");
    }
  };
  return <LoginForm onClose={onCloseForm} onSubmit={handleLoginFormSubmit} />;
}

export default Login;
