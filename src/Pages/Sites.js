import React from "react";
import { NavLink } from "react-router-dom";
import { Space, Button, Layout, Typography, Row, Col, Badge } from "antd";
import Avatar from "../Components/Avatar";
import Card from "../Components/Card";
import {
  QuestionCircleOutlined,
  PlusOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
function Sites() {
  return (
    <div>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: "#fff",
            padding: "0 16px",
          }}
        >
          <Row justify="space-between">
            <Col>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#C4C4C4",
                  width: "84px",
                  marginTop: 16,
                  height: 32,
                }}
              ></div>
            </Col>
            <Col>
              <Row gutter={8} align="middle">
                <Col>
                  <Button
                    icon={<QuestionCircleOutlined />}
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button
                    icon={
                      <Badge count={22}>
                        <BellOutlined />
                      </Badge>
                    }
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button type="text">
                    <Avatar src="https://picsum.photos/200" size={30} />
                    <DownOutlined />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout.Header>

        <Layout.Content
          style={{
            padding: 16,
            minHeight: "100vh",
          }}
        >
          <Row gutter={[5, 5]} type="flex">
            <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <Button
                icon={<PlusOutlined />}
                style={{ width: "100%", height: "100%" }}
              ></Button>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <Card
                title="WebNext.com"
                headStyle={{ fontWeight: "bold" }}
                extra={<Button type="link">Settings</Button>}
                style={{
                  border: "1px solid #DCDCDC",
                }}
              >
                <Space direction="vertical" style={{ lineHeight: "12px" }}>
                  <Typography.Text>Summary</Typography.Text>
                  <Typography.Text>Analytics</Typography.Text>
                  <Typography.Text>Other</Typography.Text>
                  <Typography.Text>info</Typography.Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <Card
                title="Logicwind.com"
                headStyle={{ fontWeight: "bold" }}
                extra={
                  <NavLink to="/sitepage">
                    <Button type="link">Settings</Button>
                  </NavLink>
                }
                style={{
                  border: "1px solid #DCDCDC",
                }}
              >
                <Space direction="vertical" style={{ lineHeight: "12px" }}>
                  <Typography.Text>Summary</Typography.Text>
                  <Typography.Text>Analytics</Typography.Text>
                  <Typography.Text>Other</Typography.Text>
                  <Typography.Text>info</Typography.Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default Sites;
