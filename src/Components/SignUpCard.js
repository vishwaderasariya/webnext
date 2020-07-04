import React, { useState } from "react";
import { Mutation } from "react-apollo";
import {
  Form,
  Input,
  Button,
  Card,
  Layout,
  Row,
  Col,
  Typography,
  Space,
} from "antd";
import gql from "graphql-tag";
import { NavLink } from "react-router-dom";

import {
  GoogleOutlined,
  UserOutlined,
  UnlockOutlined,
  MailOutlined,
} from "@ant-design/icons";

const REGISTER_USER = gql`
  mutation($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`;
const { Content } = Layout;

function SignUpCard() {
  const [formData, setformData] = useState({});

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={6}>
        <Card style={{ textAlign: "center" }} title="Sign Up">
          {/* <Typography.Text strong>Sign Up</Typography.Text> */}
          <Form
            onValuesChange={(e) => {
              setformData({ ...formData, ...e });
            }}
            style={{ margin: "1rem 0" }}
          >
            <Form.Item name="username" rules={[{ required: true }]}>
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>
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
                  username: formData.username,
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
                  >
                    Confirm{" "}
                  </Button>
                </Form.Item>
              )}
            </Mutation>
          </Form>
          <Space direction="vertical">
            <Typography.Text>Or Start With</Typography.Text>
            <Button>
              <GoogleOutlined />
            </Button>
          </Space>
        </Card>
        <Typography.Text>
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
