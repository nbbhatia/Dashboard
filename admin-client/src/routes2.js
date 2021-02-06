import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../src/views/auth/LoginView";
import Register from "../src/views/auth/RegisterView";
import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "src/layouts/MainLayout";
import AccountView from "src/views/account/AccountView";
import CustomerListView from "src/views/customer/CustomerListView";
import DashboardView from "src/views/reports/DashboardView";
import LoginView from "src/views/auth/LoginView";
import NotFoundView from "src/views/errors/NotFoundView";
import ProductListView from "src/views/product/ProductListView";
import RegisterView from "src/views/auth/RegisterView";
import SettingsView from "src/views/settings/SettingsView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authCheck } from "./store/action/signupaction";
const IndexRoutes = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(authCheck());
  }, []);

  const authUserData = useSelector((state) => state.authCheckReducer);
  const authStatus = useSelector((state) => state.LoginReducer);
  console.log("authUserData", authUserData);
  console.log("authStatus", authStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/dashboard" element={<DashboardLayout />} />
        <Route path="/account" element={<AccountView />} />
        <Route path="/customers" element={<CustomerListView />} />

        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/ProductListView" element={<ProductListView />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
