import React from "react";
import { Select, Button, Tabs, Row, Col, Layout, Badge } from "antd";
import Avatar from "../Components/Avatar";

import { NavLink, BrowserRouter } from "react-router-dom";

import {
  QuestionCircleOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Content from "../Components/Content";

const TabBarContent = ({ children }) => {
  return (
    <div style={{ padding: "0 16px" }}>
      <div style={{ backgroundColor: "#fff", minHeight: "80vh" }}>
        {children}
      </div>
    </div>
  );
};

const SitePage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #C4C4C4",
            padding: "0 16px",
          }}
        >
          <Row justify="space-between">
            <Col>
              <Row gutter={4} align="middle">
                <Col>
                  <img
                    src="https://picsum.photos/200"
                    alt="Logo"
                    style={{ width: 82, height: 30, marginBottom: "4px" }}
                  ></img>
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
                  <NavLink to="/editorpage">
                    <Button>Editor</Button>
                  </NavLink>
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
        <Layout.Content>
          <Tabs
            defaultActiveKey="1"
            tabBarStyle={{ padding: "0 16px", backgroundColor: "#fff" }}
            tabBarExtraContent={<Button type="primary">Editor</Button>}
          >
            <Tabs.TabPane tab="General" key="1">
              <TabBarContent></TabBarContent>
            </Tabs.TabPane>
            <Tabs.TabPane tab="SEO" key="2"></Tabs.TabPane>
            <Tabs.TabPane tab="Analytics" key="3"></Tabs.TabPane>
            <Tabs.TabPane tab="Plugins" key="4"></Tabs.TabPane>

            <Tabs.TabPane tab="Content" key="5">
              <BrowserRouter>
                <NavLink to="/content">
                  <TabBarContent>
                    <Content />
                  </TabBarContent>
                </NavLink>
              </BrowserRouter>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Assests" key="6"></Tabs.TabPane>
            <Tabs.TabPane tab="Access" key="7"></Tabs.TabPane>
            <Tabs.TabPane tab="Settings" key="8"></Tabs.TabPane>
          </Tabs>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default SitePage;
