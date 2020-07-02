import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "antd/dist/antd.css";

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

function RegisterUser() {
  const [formData, setformData] = useState({});

  console.log(formData);
  return (
    <Card title="REGISTER YOURSELF">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
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
              <Button type="primary" onClick={registeruser} htmlType="submit">
                Register
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default RegisterUser;
