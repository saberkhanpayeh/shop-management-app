import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsManagement from "../pages/ProductsManagement";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PageNotFound from "../pages/404";
import AuthProvider from "../provider/AuthProvider";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <ProductsManagement />
            </AuthProvider>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
