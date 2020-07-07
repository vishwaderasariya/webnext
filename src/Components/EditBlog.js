import React from "react";
import { Row, Col, Button, Space } from "antd";
import Card from "../Components/Card";
import { ArrowLeftOutlined } from "@ant-design/icons";

function EditBlog() {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Col>
            <Row>
              <Space size="large">
                <Col>
                  <Button icon={<ArrowLeftOutlined />}></Button>
                </Col>
                <Col>My First Blog is here</Col>
              </Space>
            </Row>
          </Col>
          <Col>
            <Button type="primary">Publish</Button>
          </Col>
        </Row>
      }
    ></Card>
  );
}

export default EditBlog;
