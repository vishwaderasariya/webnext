import React, { useState } from "react";
import { Form, Input, Button, Card, Space, Typography, Row, Col } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
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
        <Card style={{ textAlign: "center" }} title="Login to your Account">
          <Form
            onValuesChange={(e) => {
              setformData({ ...formData, ...e });
            }}
          >
            <Form.Item name="identifier" rules={[{ required: true }]}>
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                type="password"
                prefix={<UnlockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Space direction="vertical">
              <Typography.Text>Forgot Password?</Typography.Text>
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
                      >
                        Sign in
                      </Button>
                    </NavLink>
                  </Form.Item>
                )}
              </Mutation>
            </Space>
          </Form>
        </Card>
        <Typography.Text>
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
