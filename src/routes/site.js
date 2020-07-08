import React from "react";
import { Layout, Card } from "antd";
import { Route } from "react-router-dom";

import Menus from "../Components/Menus";
import Header from "../Components/Header";
import siteContentBlog from "./siteContentBlog";
import siteContent from "./siteContent";
import history from "../History";
console.log(history);

const site = (props) => {
  console.log(props.match.params.siteName);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header searchBar={true} siteName={props.match.params.siteName} />
        {/* <Menus
          siteName={props.match.params.siteName}
          mode="horizontal"
          defaultSelectedKeys="general"
        /> */}
        <Menus siteName={props.match.params.siteName} />
        <Layout.Content style={{ padding: 16 }}>
          <Card style={{ minHeight: "80vh" }}>
            <Route
              path="/site/:siteName/content"
              component={siteContent}
              exact
            />
            <Route
              path="/site/:siteName/content/blog"
              component={siteContentBlog}
              exact
            />
          </Card>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default site;
