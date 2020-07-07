import React from "react";
import { Typography, Row, Col, Layout, Card } from "antd";
import Menus from "../Components/Menus";
import BlogDetails from "../Components/BlogDetails";
import ContentMenu from "../Components/ContentMenu";

import Header from "../Components/Header";
import site_content from "./site_content";

const { Sider } = Layout;
function site_content_blog() {
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
          <ContentMenu mode="vertical" defaultOpenKeys="blog"></ContentMenu>
        </Sider>
        <Layout.Content>
          <Card
            bordered={false}
            title={
              <Row>
                <Col flex="300px">
                  <Typography.Text strong>Title</Typography.Text>
                </Col>
                <Col flex="200px">
                  <Typography.Text strong>Author</Typography.Text>
                </Col>
                <Col flex="150px">
                  <Typography.Text strong>Status</Typography.Text>
                </Col>
                <Col>
                  <Typography.Text strong>Action</Typography.Text>
                </Col>
              </Row>
            }
          >
            <BlogDetails
              title="Admin"
              personName="Arlene Murphy"
              tagcolor="green"
              tag="PUBLISHED"
            />
            <BlogDetails
              title="Member"
              personName="Beth Simmmons"
              tagcolor="red"
              tag="DELETED"
            />
            <BlogDetails
              title="Member"
              personName="Arlene Bell"
              tagcolor="gold"
              tag="DRAFT"
            />
            <BlogDetails
              title="Member"
              personName="Judith Pena"
              tagcolor="green"
              tag="PUBLISHED"
            />
            <BlogDetails
              title="Member"
              personName="Brandon Watson"
              tagcolor="red"
              tag="DELETED"
            />
            <BlogDetails
              title="Admin"
              personName="Juanita Cooper"
              tagcolor="gold"
              tag="DRAFT"
            />
            <BlogDetails
              title="Member"
              personName="Dianne Flores"
              tagcolor="green"
              tag="PUBLISHED"
            />
            <BlogDetails
              title="Member"
              personName="Pat Mccoy"
              tagcolor="red"
              tag="DELETED"
            />
            <BlogDetails
              title="Member"
              personName="Randall Miles"
              tagcolor="gold"
              tag="DRAFT"
            />
            <BlogDetails
              title="Admin"
              personName="Colleen Steward"
              tagcolor="green"
              tag="PUBLISHED"
            />
            <BlogDetails
              title="Member"
              personName="Dustin Richards"
              tagcolor="red"
              tag="DELETED"
            />
            <BlogDetails
              title="Admin"
              personName="Debra Howard"
              tagcolor="gold"
              tag="DRAFT"
            />
            <BlogDetails
              title="Member"
              personName="Bernard Lane"
              tagcolor="gold"
              tag="DRAFT"
            />
          </Card>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default site_content_blog;
