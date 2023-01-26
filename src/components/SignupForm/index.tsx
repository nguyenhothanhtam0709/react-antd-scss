import { Button, Col, Form, Input, Row } from "antd";
import type { RuleObject } from "rc-field-form/lib/interface";
import React from "react";
import type { FC } from "react";
import styles from "./styles.module.scss";

const SignupForm: FC = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <Form
      name="Signup"
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={10}>
        <Col xs={24} md={12}>
          <Form.Item
            name="firstName"
            rules={[{ required: false, message: "Please input your email!" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="lastName"
            rules={[{ required: false, message: "Please input your email!" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
      </Row>

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

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(rules: RuleObject, value: string) {
              if (value && value !== getFieldValue("password")) {
                return Promise.reject("Must be equal to password");
              }
              Promise.resolve();
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <div className={styles.signupButton}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </div>
    </Form>
  );
};
export default SignupForm;
