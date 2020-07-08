import React from "react";
import { Select, Button, Row, Col, Layout } from "antd";
import Avatar from "../Components/Avatar";
import { NavLink } from "react-router-dom";
import { QuestionCircleOutlined, DownOutlined } from "@ant-design/icons";
import Notification from "./Notification";
function Header({ searchBar, siteName }) {
  return (
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

              {searchBar ? (
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
              ) : null}
              <Col>
                <NavLink to={`/${siteName}/editor`}>
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
                <Notification />
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
    </Layout>
  );
}

export default Header;
