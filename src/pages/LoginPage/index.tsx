import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import LoginForm from "@components/LoginForm";
import AuthLayout from "@layouts/Auth";
import MainLayout from "@layouts/Main";
import styles from "./styles.module.scss";

const LoginPage: FC = () => {
  return (
    <MainLayout>
      <AuthLayout title="Login">
        <LoginForm />
        <div className={styles.anchor}>
          <Link className={styles.link} to={"/signup"}>
            Don't have an account? Signup
          </Link>
        </div>
      </AuthLayout>
    </MainLayout>
  );
};
export default LoginPage;
