import React from "react";
import { Select, Button, Layout, Badge } from "antd";
import Menus from "../Components/Menus";
import Header from "../Components/Header";

const { Content } = Layout;
const site = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header />
        <Layout.Content
          style={{
            padding: "0 16px",
            backgroundColor: "#fff",
            borderBottom: "1px solid #C4C4C4",
            height: 48,
          }}
        >
          <Menus mode="horizontal" defaultSelectedKeys="general" />
        </Layout.Content>
        <Layout style={{ padding: "16px  16px", minHeight: "90vh" }}>
          <Content style={{ backgroundColor: "#fff" }}></Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default site;
