import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "@redux/actions";
import { useAppDispatch } from "@redux/store";
import styles from "./styles.module.scss";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (value: LoginReqData) => {
    dispatch(loginAction({ ...value, navigate }));
  };
  const onFinishFailed = () => {};

  return (
    <Form
      name="login"
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <div className={styles.loginButton}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};
export default LoginForm;
