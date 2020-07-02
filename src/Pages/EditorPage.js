import React, { useState } from "react";
import { Layout, Select, Button, Row, Col, Radio, Badge } from "antd";
import { BrowserRouter, NavLink } from "react-router-dom";

import Avatar from "../Components/Avatar";
import {
  QuestionCircleOutlined,
  BellOutlined,
  PlusOutlined,
  DownOutlined,
  ArrowLeftOutlined,
  SelectOutlined,
  MobileOutlined,
  TabletOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import Card from "../Components/Card";
import "antd/dist/antd.css";

function EditorPage() {
  const [active, setactive] = useState("");
  console.log(active);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: "#fff",
            padding: "0 16px",
          }}
        >
          <Row justify="space-between">
            <Col>
              <Row gutter={6} align="middle">
                <Col>
                  <img
                    src="https://picsum.photos/200"
                    style={{ width: 82, height: 30, marginBottom: "4px" }}
                  ></img>
                </Col>
                <Col>
                  <Button icon={<ArrowLeftOutlined />}>Back</Button>
                </Col>
                <Col>
                  <Select
                    defaultValue="Logicwind.com"
                    style={{ width: "293px" }}
                  >
                    <Select.Option value="Logicwind.com">
                      Logicwind.com
                    </Select.Option>
                    <Select.Option value="Webnext.com">
                      Webnext.com
                    </Select.Option>
                  </Select>
                </Col>
                <Col>
                  <Radio.Group buttonStyle="solid" defaultValue="pages">
                    <BrowserRouter>
                      <NavLink to="/editor/pages">
                        <Radio.Button value="pages">Pages</Radio.Button>
                      </NavLink>
                    </BrowserRouter>
                    <BrowserRouter>
                      <NavLink to="/editor/components">
                        <Radio.Button value="components">
                          Components
                        </Radio.Button>
                      </NavLink>
                    </BrowserRouter>
                    <BrowserRouter>
                      <NavLink to="/editor/theme">
                        <Radio.Button value="theme">Theme</Radio.Button>
                      </NavLink>
                    </BrowserRouter>
                    <BrowserRouter>
                      <NavLink to="/editor/integration">
                        <Radio.Button value="integration">
                          Integration
                        </Radio.Button>
                      </NavLink>
                    </BrowserRouter>
                  </Radio.Group>
                  {/* <BrowserRouter>
                    <NavLink to="/editor/{active}">
                      <Radio.Group
                        buttonStyle="solid"
                        defaultValue="pages"
                        onChange={(event) => setactive(event.target.value)}
                      >
                        <Radio.Button value="pages">Pages</Radio.Button>
                        <Radio.Button value="components">
                          Components
                        </Radio.Button>
                        <Radio.Button value="theme">Theme</Radio.Button>
                        <Radio.Button value="integration">
                          Integration
                        </Radio.Button>
                      </Radio.Group>
                    </NavLink>
                  </BrowserRouter> */}
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle">
                <Col>
                  <Button
                    icon={<QuestionCircleOutlined style={{ fontSize: 20 }} />}
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button
                    icon={
                      <Badge count={22}>
                        <BellOutlined style={{ fontSize: 20 }} />
                      </Badge>
                    }
                    type="text"
                  ></Button>
                </Col>
                <Col>
                  <Button type="text">
                    <Avatar src="https://picsum.photos/200" size={30} />
                    <DownOutlined style={{ fontSize: 10 }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout.Header>
        <Layout>
          <Layout.Sider width="33%">
            <Card
              size="small"
              style={{ minHeight: "90vh" }}
              title={
                <Row justify="space-between">
                  <Col>
                    <Select defaultValue="Home(/home)"></Select>
                  </Col>
                  <Col>
                    <Button icon={<PlusOutlined />}>Add page</Button>
                  </Col>
                </Row>
              }
            ></Card>
          </Layout.Sider>

          <Layout.Content style={{ paddingLeft: 8 }}>
            <Card
              size="small"
              style={{ minHeight: "90vh" }}
              title={
                <Row>
                  <Col sm={23} md={23} lg={23} xl={23}>
                    <Row justify="center">
                      <Radio.Group>
                        <BrowserRouter>
                          <NavLink to="/editor/pages/desktopview">
                            <Radio.Button value="desktop">
                              <LaptopOutlined />
                            </Radio.Button>
                          </NavLink>
                        </BrowserRouter>
                        <BrowserRouter>
                          <NavLink to="/editor/pages/tabletview">
                            <Radio.Button value="tab">
                              <TabletOutlined />{" "}
                            </Radio.Button>
                          </NavLink>
                        </BrowserRouter>
                        <BrowserRouter>
                          <NavLink to="editor/pages/mobileview">
                            <Radio.Button value="mobile">
                              <MobileOutlined />
                            </Radio.Button>
                          </NavLink>
                        </BrowserRouter>
                      </Radio.Group>
                    </Row>
                  </Col>
                  <Col sm={1} md={1} lg={1} xl={1}>
                    <Row>
                      <Button icon={<SelectOutlined />}></Button>
                    </Row>
                  </Col>
                </Row>
              }
            ></Card>
          </Layout.Content>
        </Layout>
      </Layout>
      <div></div>
    </div>
  );
}

export default EditorPage;
