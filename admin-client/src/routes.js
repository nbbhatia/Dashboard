import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "src/layouts/MainLayout";
import AccountView from "src/views/account/AccountView";
import Career from "src/views/careers/CareerIndex";
import GetAllOpening from "src/views/careers/getAllvacancy";
import CustomerListView from "src/views/customer/CustomerListView";
import DashboardView from "src/views/reports/DashboardView";
import LoginView from "src/views/auth/LoginView";
import NotFoundView from "src/views/errors/NotFoundView";
import ProductListView from "src/views/product/ProductListView";
import RegisterView from "src/views/auth/RegisterView";
import SettingsView from "src/views/settings/SettingsView";
import { authCheck } from "./store/action/signupaction";
import { useDispatch, useSelector } from "react-redux";
const MyApp = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(authCheck());
  }, []);
  let isLoggedIn = false;
  const authStatus = useSelector((state) => state.authCheckReducer);

  if (authStatus.success) {
    isLoggedIn = true;
  }

  const routes = useRoutes([
    {
      path: "app",
      element: <DashboardLayout />,
      children: [
        { path: "account", element: <AccountView /> },
        // { path: "customers", element: <CustomerListView /> },
        { path: "dashboard", element: isLoggedIn ? <DashboardView /> : null },
        { path: "products", element: <ProductListView /> },
        // { path: "settings", element: <SettingsView /> },

        { path: "careers", element: <Career /> },
        { path: "allOpening", element: <GetAllOpening /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LoginView /> },
        { path: "register", element: <RegisterView /> },
        { path: "404", element: <NotFoundView /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
  return routes;
};
export default MyApp;
