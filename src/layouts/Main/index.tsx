import { Layout, Menu } from "antd";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { AliwangwangOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    text: "Login",
    path: "/login",
  },
  {
    text: "Signup",
    path: "/signup",
  },
].map((v, k) => ({
  key: k + 1,
  label: <Link to={v.path}>{v.text}</Link>,
}));

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className={styles.layoutContainer}>
      <Header className={styles.header}>
        <Link to="/" className={styles.logoContainer}>
          <AliwangwangOutlined className={styles.logo} />
        </Link>
        <Menu mode="horizontal" className={styles.navMenu} items={menuItems} />
      </Header>
      <Content className={styles.contentContainer}>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
