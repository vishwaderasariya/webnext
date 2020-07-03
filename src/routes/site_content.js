import React from "react";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import { Layout, Menu, Card } from "antd";
import ContentMenu from "../Components/ContentMenu";

const { Sider, Content } = Layout;

function site_content() {
  return (
    <div style={{ minHeight: 100 }}>
      <Header />
      <Layout.Content
        style={{
          padding: "0 16px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #C4C4C4",
          height: 48,
        }}
      >
        <Menus mode="horizontal" defaultSelectedKeys="content"></Menus>
      </Layout.Content>
      <Layout style={{ minHeight: "80vh", padding: "16px 16px" }}>
        <Sider style={{ backgroundColor: "#fff" }}>
          <ContentMenu mode="vertical" defaultOpenKeys="blog"></ContentMenu>
        </Sider>
        <Layout>
          <Content>
            <Card style={{ minHeight: "80vh" }}></Card>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default site_content;
