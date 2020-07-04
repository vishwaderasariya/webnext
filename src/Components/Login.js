import React from "react";
import { Layout, Typography, Button } from "antd";
import { NavLink } from "react-router-dom";
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
