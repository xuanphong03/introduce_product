import React from "react";
import { NavLink } from "react-router-dom";

const SIDE_BAR = [
  { id: 1, name: "Product list", url: "/product/admin/product-list" },
  { id: 2, name: "Create product", url: "/product/admin/create" },
];

function Sidebar(props) {
  return (
    <div className="w-[300px] pl-12 pr-8 bg-blue-300">
      {SIDE_BAR.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            to={nav.url}
            className={({ isActive }) =>
              `uppercase block font-medium text-lg my-2 py-2 px-8 rounded bg-slate-400 cursor-pointer ${
                isActive ? "bg-blue-800 text-white" : ""
              }`
            }
          >
            {nav.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;
