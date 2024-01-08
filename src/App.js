import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./features/Home/Home";
import Login from "./features/Auth/components/Login";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProductUser from "./features/Product/ProductUser/ProductUser";
import { useSelector } from "react-redux";
import ProductAdmin from "./features/Product/ProductAdmin/ProductAdmin";
import NotHavePermissionAccess from "./components/NotHavePermissionAccess/NotHavePermissionAccess";

function App() {
  const infoUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!infoUser.id;

  const [openFormLogin, setOpenFormLogin] = useState(false);

  const handleOpenFormLogin = () => {
    setOpenFormLogin(true);
  };

  const handleCLoseFormLogin = () => {
    setOpenFormLogin(false);
  };

  return (
    <div className="App relative">
      <Header openFormLogin={handleOpenFormLogin} />

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
      {openFormLogin && <Login onCloseForm={handleCLoseFormLogin} />}
    </div>
  );
}

export default App;
