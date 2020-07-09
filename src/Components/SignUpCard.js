import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { Form, Input, Button, Card, Row, Col, Typography } from "antd";
import gql from "graphql-tag";
import { NavLink } from "react-router-dom";

import {
  GoogleOutlined,
  UnlockOutlined,
  MailOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const REGISTER_USER = gql`
  mutation($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      user {
        id
        email
      }
    }
  }
`;

function SignUpCard() {
  const [formData, setformData] = useState({});

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={6}>
        <Card
          style={{
            textAlign: "center",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
          title="Sign Up"
        >
          {/* <Typography.Text strong>Sign Up</Typography.Text> */}
          <Form
            onValuesChange={(e) => {
              setformData({ ...formData, ...e });
            }}
            style={{ margin: "1rem 0" }}
          >
            {/* <Form.Item name="username" rules={[{ required: true }]}>
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item> */}
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input
                type="email"
                placeholder="Enter your Email"
                prefix={<MailOutlined />}
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                placeholder="Create Password"
                prefix={<UnlockOutlined />}
              />
            </Form.Item>

            <Mutation
              mutation={REGISTER_USER}
              variables={{
                input: {
                  username: formData.email,
                  password: formData.password,
                  email: formData.email,
                },
              }}
            >
              {(registeruser) => (
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={registeruser}
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Confirm
                  </Button>
                </Form.Item>
              )}
            </Mutation>
          </Form>

          <p>Or Start With</p>
          <Row gutter={10} justify="center">
            <Col>
              <Button style={{ padding: "4px 40px" }}>
                <GoogleOutlined />
              </Button>
            </Col>
            <Col>
              <Button style={{ padding: "4px 40px" }}>
                <FacebookOutlined />
              </Button>
            </Col>
          </Row>
        </Card>
        <Typography.Text style={{ marginLeft: "80px" }}>
          If you have already account,
          <NavLink to="login">
            <Button type="link">Login</Button>
          </NavLink>
        </Typography.Text>
      </Col>
    </Row>
  );
}

export default SignUpCard;
