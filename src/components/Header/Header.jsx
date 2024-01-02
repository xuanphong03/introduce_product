import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";

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
  const dispatch = useDispatch();

  const [isOpenedMenu, setOpenedMenu] = useState(false);

  const infoUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!infoUser.id;

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Bấm ra ngoài menu, đóng menu
        setOpenedMenu(false);
      }
    };

    // Thêm sự kiện lắng nghe cho cả trang
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Gỡ bỏ sự kiện lắng nghe khi component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleClickLogin = () => {
    openFormLogin();
  };

  const toggleOpenMenu = () => {
    setOpenedMenu((prevState) => !prevState);
  };

  const handleLogoutAccount = (event) => {
    const action = logout();
    dispatch(action);
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

        {!isLoggedIn && (
          <div
            className="flex items-center text-lg cursor-pointer px-6 py-[6px] ml-[2px] hover:bg-purple-700 hover:text-white rounded-md"
            onClick={handleClickLogin}
          >
            <FaRegUser />
            <span className="ml-2">Login</span>
          </div>
        )}

        {isLoggedIn && (
          <div
            ref={menuRef}
            onClick={toggleOpenMenu}
            className="relative flex items-center px-6 py-[6px] text-lg cursor-pointer"
          >
            {/* <FaCircleUser className="text-2xl" /> */}
            <img
              src="https://kenh14cdn.com/cPLqMkXoPs3Tkua5x0JnElZd2udVtV/Image/2015/03/updates/150330dep03-7ef68.jpg"
              alt="avatar"
              className="w-10 rounded-full"
            />
            <span className="ml-2">Admin</span>
            {isOpenedMenu && (
              <div className="absolute rounded top-[3rem] w-40 right-4 bg-white z-50 text-base list-nonedivide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Admin
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    admin@gmail.com
                  </span>
                </div>
                <ul className="py-2 border-t border-solid">
                  <li>
                    <Link
                      to="/product/admin/product-list"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Manage product
                    </Link>
                  </li>
                  <li>
                    <span
                      onClick={handleLogoutAccount}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

export default Header;
