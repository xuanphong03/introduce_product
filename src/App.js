import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import NotHavePermissionAccess from "./components/NotHavePermissionAccess/NotHavePermissionAccess";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Login from "./features/Auth/components/Login";
import Register from "./features/Auth/components/Register";
import Home from "./features/Home/Home";
import ProductAdmin from "./features/Product/ProductAdmin/ProductAdmin";
import ProductUser from "./features/Product/ProductUser/ProductUser";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function App() {
  const infoUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!infoUser.id;

  const [openForm, setOpenedForm] = useState(false);
  const [currentMode, setCurrentMode] = useState(MODE.LOGIN);

  const handleOpenForm = () => {
    setOpenedForm(true);
  };

  const handleCLoseForm = () => {
    setOpenedForm(false);
  };

  const handleChangeMode = () => {
    if (currentMode === MODE.LOGIN) {
      setCurrentMode(MODE.REGISTER);
    } else {
      setCurrentMode(MODE.LOGIN);
    }
  };

  return (
    <div className="App relative">
      <Header openForm={handleOpenForm} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductUser />} />
        <Route
          path="/admin/*"
          element={isLoggedIn ? <ProductAdmin /> : <NotHavePermissionAccess />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      {openForm && currentMode === MODE.LOGIN && (
        <Login onCloseForm={handleCLoseForm} onChangeForm={handleChangeMode} />
      )}
      {openForm && currentMode === MODE.REGISTER && (
        <Register
          onCloseForm={handleCLoseForm}
          onChangeForm={handleChangeMode}
        />
      )}
    </div>
  );
}

export default App;
