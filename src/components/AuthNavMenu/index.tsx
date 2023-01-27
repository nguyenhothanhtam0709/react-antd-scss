import { Button, Dropdown } from "antd";
import React, { type FC } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@redux/store";
import { logoutAction } from "@redux/actions";

type Props = {
  user: UserData;
};

const AuthNavMenu: FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const menuItems = [
    {
      key: 1,
      label: (
        <Button type="text" block className={styles.navBtnUser}>
          {user.email}
        </Button>
      ),
    },
    {
      key: 2,
      label: (
        <Button
          type="text"
          block
          className={styles.navBtnLogout}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items: menuItems }} placement="bottomRight">
      <Link to="/" className={styles.navIcon}>
        {user.email}
      </Link>
    </Dropdown>
  );
};
export default AuthNavMenu;
