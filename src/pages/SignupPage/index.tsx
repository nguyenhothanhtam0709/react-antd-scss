import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "@components/SignupForm";
import { AuthLayout } from "@layouts/Auth";
import styles from "./styles.module.scss";

const SignupPage: FC = () => {
  return (
    <AuthLayout title="Signup">
      <SignupForm />
      <div className={styles.anchor}>
        <Link className={styles.link} to={"/login"}>
          Already have an account? Login
        </Link>
      </div>
    </AuthLayout>
  );
};
export default SignupPage;
