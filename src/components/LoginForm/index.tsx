import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import type { FC } from "react";
import styles from "./styles.module.scss";

export const LoginForm: FC = () => {
  const onFinish = () => {};
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
