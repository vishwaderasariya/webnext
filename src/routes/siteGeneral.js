import React from "react";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import {
  Layout,
  Card,
  Input,
  Button,
  Row,
  Col,
  Popover,
  Typography,
  Space,
} from "antd";
import { UpCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import history from "../History";
console.log(history);

function siteGeneral(props) {
  const content = (
    <div>
      <p>your own custome (sub)domain.</p>
      <p> enter the primary domain only</p>
    </div>
  );
  console.log(props.match.params.siteName);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header searchBar={true} />
        <Menus siteName={props.match.params.siteName} />
        <Layout style={{ minHeight: "80vh", padding: "16px 16px" }}>
          <Layout.Content>
            <Row justify="center" align="top">
              <Col span={18}>
                <Card
                  style={{
                    minHeight: "288px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                  title="Domain"
                >
                  <Row gutter={[0, 50]} justify="start">
                    <Col span={6}>
                      <Typography.Text strong>Custom Domain</Typography.Text>
                    </Col>
                    <Col>
                      <Space>
                        <UpCircleOutlined />
                        Upload for custome domain
                        <Button style={{ border: "none" }}>
                          <InfoCircleOutlined />
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={[0, 50]} justify="start">
                    <Col span={6}>
                      <Typography.Text strong>
                        Webnext Subdomain
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Space>
                        <Input size="large" />
                        <Popover content={content} placement="bottom">
                          <Button style={{ border: "none" }}>
                            <InfoCircleOutlined />
                          </Button>
                        </Popover>
                      </Space>
                    </Col>
                  </Row>
                  <Row justify="end">
                    <Button type="primary">Update Domain</Button>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default siteGeneral;
