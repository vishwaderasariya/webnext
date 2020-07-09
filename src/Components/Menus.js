import React from "react";
import { Button, Col, Row, Menu } from "antd";
import { NavLink } from "react-router-dom";

function Menus({ siteName }) {
  console.log(siteName);
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ backgroundColor: "#fff", padding: "0 16px" }}
    >
      <Col>
        <Menu mode="horizontal">
          <Menu.Item key="general">
            <NavLink to={`/site/${siteName}/general`}>General</NavLink>
          </Menu.Item>
          <Menu.Item key="seo">
            <NavLink to={`/site/${siteName}/seo`}>SEO</NavLink>
          </Menu.Item>
          <Menu.Item key="analysis">
            <NavLink to={`/site/${siteName}/analysis`}>Analysis</NavLink>
          </Menu.Item>
          <Menu.Item key="plugin">
            <NavLink to={`/site/${siteName}/plugin`}>Plugin</NavLink>
          </Menu.Item>
          <Menu.Item key="content">
            <NavLink to={`/site/${siteName}/content`}>Content</NavLink>
          </Menu.Item>
          <Menu.Item key="assets">
            <NavLink to={`/site/${siteName}/assets`}>Assets</NavLink>
          </Menu.Item>
          <Menu.Item key="access">
            <NavLink to={`/site/${siteName}/access`}>Access</NavLink>
          </Menu.Item>
          <Menu.Item key="setting">
            <NavLink to={`/site/${siteName}/settings`}>Settings</NavLink>
          </Menu.Item>
        </Menu>
      </Col>
      <Col>
        <Button type="primary">Editor</Button>
      </Col>
    </Row>
  );
}

export default Menus;
