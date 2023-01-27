import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "@common/constants/router";
import SignupForm from "@components/SignupForm";
import AuthLayout from "@layouts/Auth";
import MainLayout from "@layouts/Main";
import styles from "./styles.module.scss";

const SignupPage: FC = () => {
  return (
    <MainLayout>
      <AuthLayout title="Signup">
        <SignupForm />
        <div className={styles.anchor}>
          <Link className={styles.link} to={LOGIN_ROUTE}>
            Already have an account? Login
          </Link>
        </div>
      </AuthLayout>
    </MainLayout>
  );
};
export default SignupPage;
