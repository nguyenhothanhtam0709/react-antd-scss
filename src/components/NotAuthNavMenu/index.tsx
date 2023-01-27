import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@common/constants/router";
import styles from "./styles.module.scss";

const menuItems = [
  {
    text: "Login",
    path: LOGIN_ROUTE,
  },
  {
    text: "Signup",
    path: SIGNUP_ROUTE,
  },
].map((v, k) => ({
  key: k + 1,
  label: <Link to={v.path}>{v.text}</Link>,
}));

const NotAuthNavMenu = () => {
  return (
    <Menu mode="horizontal" className={styles.navMenu} items={menuItems} />
  );
};
export default NotAuthNavMenu;
