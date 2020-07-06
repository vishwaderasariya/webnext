import React from "react";
import { Select, Button, Layout, Badge, Card } from "antd";
import Menus from "../Components/Menus";
import Header from "../Components/Header";
import GeneralMenu from "../Components/GeneralMenu";

const { Content, Sider } = Layout;
const site = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header searchBar={true} sites={["Logicwind.com", "Webnext.com"]} />
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
        <Layout style={{ minHeight: "80vh", padding: "16px 16px" }}>
          <Sider style={{ backgroundColor: "#fff" }}>
            <GeneralMenu mode="vertical" defaultOpenKeys="blog"></GeneralMenu>
          </Sider>
          <Layout>
            <Content>
              <Card style={{ minHeight: "80vh" }}></Card>
            </Content>
          </Layout>
        </Layout>
        {/* <Layout style={{ padding: "16px  16px", minHeight: "90vh" }}>
          <Content style={{ backgroundColor: "#fff" }}></Content>
        </Layout> */}
      </Layout>
    </div>
  );
};

export default site;
