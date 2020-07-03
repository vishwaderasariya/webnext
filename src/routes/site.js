import React from "react";
import { Select, Button, Tabs, Row, Col, Layout, Badge } from "antd";
import Menus from "../Components/Menus";
import Content from "../Components/Content";
import Header from "../Components/Header";

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
      </Layout>
    </div>
  );
};

export default site;
