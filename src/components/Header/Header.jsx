import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

Header.propTypes = {
  openForm: PropTypes.func,
};

const NAVIGATIONS = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Products", url: "/products" },
];

function Header({ openForm }) {
  const dispatch = useDispatch();

  const [isOpenedMenu, setOpenedMenu] = useState(false);
  const { totalItem } = useSelector((state) => state.user.cart);
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
    openForm();
  };

  const toggleOpenMenu = () => {
    setOpenedMenu((prevState) => !prevState);
  };

  const handleLogoutAccount = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <div className="flex fixed top-0 left-0 right-0 z-50 justify-between bg-slate-400  items-center px-12 h-[var(--height-header)]">
      <div className="flex items-center">
        <Link to="/" className="block font-extrabold text-2xl mr-12">
          <img src={Logo} alt="" className=" lg:hidden w-16 h-16" />
          <span className="hidden lg:block leading-[var(--height-header)]">
            MICHAEL WATCH
          </span>
        </Link>
        <ul className="flex justify-start items-center">
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
        </ul>
      </div>
      <div className="flex items-center">
        <Badge className="mr-2" badgeContent={totalItem} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
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
            <img
              src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
              alt="avatar"
              className="w-10 rounded-full"
            />
            <span className="ml-2 truncate">{infoUser.fullName}</span>
            {isOpenedMenu && (
              <div className="absolute rounded top-[3rem] w-40 right-4 bg-white z-50 text-base list-nonedivide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {infoUser.fullName}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {infoUser.email}
                  </span>
                </div>
                <ul className="py-2 border-t border-solid">
                  <li>
                    <Link
                      to="/admin/product-list"
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
      </div>
    </div>
  );
}

export default Header;
