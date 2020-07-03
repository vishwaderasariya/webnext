import React from "react";
import { Typography, Row, Col } from "antd";
import Card from "../Components/Card";
import BlogDetails from "../Components/BlogDetails";

function Blog() {
  return (
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
  );
}

export default Blog;
