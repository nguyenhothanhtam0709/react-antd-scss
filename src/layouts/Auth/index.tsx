import { Typography } from "antd";
import React, { PropsWithChildren } from "react";
import type { FC } from "react";
import styles from "./styles.module.scss";

const { Title } = Typography;

type Props = {
  title: string;
};

const AuthLayout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <Title className={styles.title}>{title}</Title>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
