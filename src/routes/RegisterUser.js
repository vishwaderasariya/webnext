import React from "react";
import SignUpCard from "../Components/SignUpCard";
import { Layout } from "antd";

function RegisterUser() {
  return (
    <Layout>
      <Layout.Content>
        <SignUpCard />
      </Layout.Content>
    </Layout>
  );
}

export default RegisterUser;
