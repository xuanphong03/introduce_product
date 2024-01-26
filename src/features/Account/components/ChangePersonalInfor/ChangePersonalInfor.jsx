import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

ChangePersonalInfor.propTypes = {};

function ChangePersonalInfor({ userInfor }) {
  const handleSubmit = async (data) => {
    try {
      toast.success("Update personal information successfully <3");
      console.log(data);
    } catch (error) {}
  };
  return <ChangePersonalInfor onSubmit={handleSubmit} userInfor={userInfor} />;
}

export default ChangePersonalInfor;
