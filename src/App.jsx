import React from "react";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Screens/PageNotFound";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CoinDetails from "./Screens/CoinDetails";
import CardPage from "./Screens/CardPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/auth/coin/:id" element={<CoinDetails />} />
        <Route path="/card" element={<CardPage/>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
