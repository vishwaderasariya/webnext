import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Space, Button, Layout, Row, Col, Badge } from "antd";
import Avatar from "../Components/Avatar";
import Card from "../Components/Card";
import Header from "../Components/Header";
import {
  QuestionCircleOutlined,
  PlusOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import CardTile from "../Components/CardTile";
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
              <img
                src="https://picsum.photos/200"
                alt="Logo"
                style={{ width: 82, height: 30, marginBottom: "4px" }}
              ></img>
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
          {/*<Row gutter={[5, 5]}>
             <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <NavLink to="createsite">
                <Button
                  icon={<PlusOutlined />}
                  style={{ width: "100%", height: "100%" }}
                ></Button>
              </NavLink>
            </Col> 
             <Col xs={24} sm={12} md={8} lg={6} xl={5}> 
             <Card
                title="WebNext.com"
                headStyle={{ fontWeight: "bold" }}
                extra={
                  <NavLink to="/site">
                    <Button type="link">Settings</Button>
                  </NavLink>
                }
                style={{
                  border: "1px solid #DCDCDC",
                }}
              ></Card> 
            
             </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={5}>
              <Card
                title="Logicwind.com"
                headStyle={{ fontWeight: "bold" }}
                extra={
                  <NavLink to="/site">
                    <Button type="link">Settings</Button>
                  </NavLink>
                }
                style={{
                  border: "1px solid #DCDCDC",
                }}
              ></Card>
            </Col>  
          </Row>*/}
          <CardTile />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default Sites;
