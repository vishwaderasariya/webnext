import React from "react";
import { Button, Layout, Row, Col, Badge } from "antd";
import Avatar from "../Components/Avatar";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  QuestionCircleOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import CardTile from "../Components/CardTile";
const GET_SITES = gql`
  {
    sites {
      name
      domain
      id
    }
  }
`;

function Sites() {
  const { data, loading, error } = useQuery(GET_SITES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

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
          <CardTile sites={data.sites} />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default Sites;
