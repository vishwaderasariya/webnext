import React from "react";
import { Layout, Badge, Card } from "antd";
import Menus from "../Components/Menus";
import Header from "../Components/Header";
import history from "../History";
console.log(history);

const site = (props) => {
  console.log(props.match.params.siteName);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header searchBar={true} siteName={props.match.params.siteName} />
        <Menus
          siteName={props.match.params.siteName}
          mode="horizontal"
          defaultSelectedKeys="general"
        />
        <Layout.Content style={{ padding: 16 }}>
          <Card style={{ minHeight: "80vh" }}></Card>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default site;
