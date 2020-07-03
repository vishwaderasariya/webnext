import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

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

function Login() {
  const [formData, setformData] = useState({});

  return (
    <Card title="Login">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item
          label="Identifier"
          name="identifier"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>

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
              <Button type="primary" onClick={userlogin} htmlType="submit">
                Login
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default Login;
