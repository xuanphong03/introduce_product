import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./features/Home/Home";
import Login from "./features/Auth/components/Login";
import { ToastContainer } from "react-toastify";

function App() {
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
      </Routes>
      <ToastContainer />
      {openFormLogin && <Login onCloseForm={handleCLoseFormLogin} />}
    </div>
  );
}

export default App;
