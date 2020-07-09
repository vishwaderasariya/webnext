import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Row, Col, Divider } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {
  UserOutlined,
  UnlockOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const LOGIN_USER = gql`
  mutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      user {
        username
        email
      }
    }
  }
`;

function SigninCard() {
  const [formData, setformData] = useState({});

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={6}>
        <Card
          style={{
            textAlign: "center",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
          title="Login to your Account"
        >
          <Form
            onValuesChange={(e) => {
              setformData({ ...formData, ...e });
            }}
          >
            <Form.Item name="identifier" rules={[{ required: true }]}>
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                prefix={<UnlockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <p>Forgot Password?</p>
            <Mutation
              mutation={LOGIN_USER}
              variables={{
                input: {
                  identifier: formData.identifier,
                  password: formData.password,
                },
              }}
            >
              {(userlogin) => (
                <Form.Item>
                  <NavLink to="sites">
                    <Button
                      type="primary"
                      onClick={userlogin}
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </NavLink>
                </Form.Item>
              )}
            </Mutation>
            <Divider />

            <p>Or log in with one of the following platform</p>
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
          </Form>
        </Card>
        <Typography.Text style={{ marginLeft: "80px" }}>
          If you don't have an account,
          <NavLink to="register">
            <Button type="link">Sign up</Button>
          </NavLink>
        </Typography.Text>
      </Col>
    </Row>
  );
}

export default SigninCard;
