import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "@common/constants/router";
import store from "@redux/store";
import styles from "./App.module.scss";

const MainLayout = lazy(() => import("./layouts/Main"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path={BASE_ROUTE} element={<MainLayout />} />
            <Route path={LOGIN_ROUTE} element={<LoginPage />} />
            <Route path={SIGNUP_ROUTE} element={<SignupPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
