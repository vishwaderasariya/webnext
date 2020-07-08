import React from "react";
import { Button, Col, Row } from "antd";
import AntMenu from "./AntMenu";

function Menus({ defaultSelectedKeys, mode, siteName }) {
  console.log(siteName);
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ backgroundColor: "#fff", padding: "0 16px" }}
    >
      <Col>
        <AntMenu
          siteName={siteName}
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
