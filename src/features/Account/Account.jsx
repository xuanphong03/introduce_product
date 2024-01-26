import React from "react";

import AccountInfor from "./components/AccountInfor";
import { useSelector } from "react-redux";
import ChangePersonalInfo from "./components/ChangePersonalInfor/ChangePersonalInfoForm";
import ChangePassword from "./components/ChangePassword/ChangePassword";
Account.propTypes = {};

function Account(props) {
  const { current } = useSelector((state) => state.user);
  return (
    <div className="relative h-[calc(120vh-var(--height-header))] pt-[var(--height-header)]">
      <div className="py-4 px-8 m-8 flex">
        <AccountInfor userInfor={current} />
        <div className="ml-4 flex-1 flex">
          <ChangePersonalInfo userInfor={current} />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}

export default Account;
