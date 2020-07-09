import React from "react";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import { Layout, Card, Button, Row, Col, Typography, Empty } from "antd";
import {
  FilePdfOutlined,
  DeleteOutlined,
  PlusOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import history from "../History";
console.log(history);

function siteAssets(props) {
  console.log(props.match.params.siteName);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header searchBar={true} />
        <Menus siteName={props.match.params.siteName} />
        <Layout style={{ minHeight: "80vh", padding: "16px 16px" }}>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <Card
                  style={{ minHeight: "80vh" }}
                  extra={
                    <Row justify="end" gutter={5}>
                      <Col>
                        <Button type="primary">
                          <PlusOutlined />
                          Add Folder
                        </Button>
                      </Col>
                    </Row>
                  }
                >
                  <Row gutter={26}>
                    <Col span={5}>
                      <Card
                        style={{ backgroundColor: "#E8E8E8" }}
                        actions={[
                          <Typography.Text strong>
                            Media Library
                          </Typography.Text>,
                          <DeleteOutlined
                            key="delete"
                            style={{ color: "red" }}
                          />,
                        ]}
                      >
                        <Row
                          justify="center"
                          align="middle"
                          style={{ height: "100px" }}
                        >
                          <Col>
                            <FolderOutlined style={{ fontSize: 50 }} />
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                    <Col span={5}>
                      <Card
                        style={{ backgroundColor: "#E8E8E8" }}
                        actions={[
                          <Typography.Text strong>
                            Styling Docs
                          </Typography.Text>,
                          <DeleteOutlined
                            key="delete"
                            style={{ color: "red" }}
                          />,
                        ]}
                      >
                        <Row
                          justify="center"
                          align="middle"
                          style={{ height: "100px" }}
                        >
                          <Col>
                            <FolderOutlined style={{ fontSize: 50 }} />
                          </Col>
                        </Row>
                      </Card>
                    </Col>
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

export default siteAssets;
