import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";

Header.propTypes = {
  openFormLogin: PropTypes.func,
};

const NAVIGATIONS = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Products", url: "/products" },
  { id: 4, name: "Contact us", url: "/contact" },
];

function Header({ openFormLogin }) {
  const handleClickLogin = () => {
    openFormLogin();
  };

  return (
    <div className="flex bg-slate-400 justify-between items-center px-12 h-[var(--height-header)]">
      <div className="font-extrabold  text-2xl">MICHAEL WATCH</div>
      <ul className="flex items-center">
        {NAVIGATIONS.map((nav) => (
          <NavLink
            key={nav.id}
            className={({ isActive }) =>
              `uppercase font-medium px-6 py-2 hover:bg-purple-700 hover:text-white rounded-md mx-[2px] ${
                isActive ? "bg-purple-700 text-white" : ""
              }`
            }
            to={nav.url}
          >
            {nav.name}
          </NavLink>
        ))}
        <div
          className="flex items-center text-lg ml-4 cursor-pointer"
          onClick={handleClickLogin}
        >
          <FaRegUser />
          <span className="ml-2">Login</span>
        </div>
      </ul>
    </div>
  );
}

export default Header;
