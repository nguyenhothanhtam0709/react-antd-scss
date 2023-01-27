import { Layout } from "antd";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AliwangwangOutlined } from "@ant-design/icons";
import { BASE_ROUTE } from "@common/constants/router";
import AuthNavMenu from "@components/AuthNavMenu";
import NotAuthNavMenu from "@components/NotAuthNavMenu";
import type { RootState } from "@redux/reducers";
import type { AuthState } from "@redux/slices/auth";
import styles from "./styles.module.scss";

const { Header, Content, Footer } = Layout;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const authData = useSelector<RootState, AuthState>((state) => state.auth);

  return (
    <Layout className={styles.layoutContainer}>
      <Header className={styles.header}>
        <Link to={BASE_ROUTE} className={styles.logoContainer}>
          <AliwangwangOutlined className={styles.logo} />
        </Link>
        {authData.user ? (
          <AuthNavMenu user={authData.user} />
        ) : (
          <NotAuthNavMenu />
        )}
      </Header>
      <Content className={styles.contentContainer}>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
