import React from "react";
import { Layout } from "antd";
import SigninCard from "./SigninCard";

function Login() {
  return (
    <Layout>
      <Layout.Content>
        <SigninCard />
      </Layout.Content>
    </Layout>
  );
}

export default Login;
