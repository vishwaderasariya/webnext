import React from "react";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import { Layout, Menu } from "antd";
import AntMenu from "../Components/AntMenu";
import SubMenu from "antd/lib/menu/SubMenu";

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
    </div>
  );
}

export default site_content;
