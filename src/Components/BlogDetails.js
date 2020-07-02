import React from "react";
import { Typography, Row, Col, Tag, Space } from "antd";
import Avatar from "./Avatar";

import { MoreOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function BlogDetails({ title, personName, tagcolor, tag }) {
  return (
    <Row align="middle" style={{ margin: "8px auto" }}>
      <Col flex="300px">
        <Typography.Text>{title}</Typography.Text>
      </Col>
      <Col flex="200px">
        <Typography.Text>
          <Space size="middle">
            <Avatar />
            {personName}
          </Space>
        </Typography.Text>
      </Col>
      <Col flex="150px">
        <Tag color={tagcolor}>{tag}</Tag>
      </Col>
      <Col>
        <Typography.Text>
          <MoreOutlined />
        </Typography.Text>
      </Col>
    </Row>
  );
}

export default BlogDetails;
