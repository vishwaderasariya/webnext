import React from "react";
import { NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Card, Typography, Space, Button, Col, Row } from "antd";

function CardTile({ sites }) {
  console.log(sites);
  return (
    <div>
      <Row gutter={[5, 5]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={5}>
          <NavLink to="createSite">
            <Button
              icon={<PlusOutlined />}
              style={{ width: "100%", height: "100%" }}
            ></Button>
          </NavLink>
        </Col>
        {sites &&
          sites.map((site, id) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <Card
                title={site.domain}
                headStyle={{ fontWeight: "bold" }}
                extra={
                  <NavLink to={`/site/${site.name}`}>
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
          ))}
      </Row>
    </div>
  );
}

export default CardTile;
