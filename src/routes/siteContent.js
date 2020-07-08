import React from "react";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import { Layout, Card } from "antd";
import ContentMenu from "../Components/ContentMenu";
import history from "../History";
console.log(history);

const { Sider, Content } = Layout;

function siteContent(props) {
  console.log(props.match.params.siteName);
  return (
    <div style={{ minHeight: 100 }}>
      <Header searchBar={true} />
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
          <ContentMenu
            mode="vertical"
            defaultOpenKeys="blog"
            siteName={props.match.params.siteName}
          ></ContentMenu>
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

export default siteContent;

// /site/{ sitename } /content/blogs(e.g. / site / logicwind / content / blogs)
