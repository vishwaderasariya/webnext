import React, { useState } from "react";
import { Menu, Button, Col, Row, Space } from "antd";
import AntMenu from "./AntMenu";

function Menus({ defaultSelectedKeys, mode }) {
  return (
    <Row justify="space-between" align="middle" style={{ height: 48 }}>
      <Col>
        <AntMenu
          defaultSelectedKeys={defaultSelectedKeys}
          mode={mode}
          style={{
            borderBottom: "none",
          }}
        />
      </Col>
      <Col>
        <Button type="primary">Editor</Button>
      </Col>
    </Row>
  );
}

export default Menus;
