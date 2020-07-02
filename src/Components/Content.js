import React from "react";
import { NavLink } from "react-router-dom";
import { Tabs, Space } from "antd";
import "../App.css";
import {
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import Blog from "./Blog";
import Forms from "./Forms";
import Survey from "./Survey";
import Subscriptions from "./Subscriptions";
import Images from "./Images";
function Content() {
  return (
    <Tabs Key="1" tabPosition="left">
      <Tabs.TabPane
        tab={
          <Space>
            <UserOutlined /> Blogs
          </Space>
        }
        key="1"
      >
        <NavLink to="/content/blog">
          <Blog />
        </NavLink>
      </Tabs.TabPane>

      <Tabs.TabPane
        tab={
          <Space>
            <SettingOutlined /> Forms
          </Space>
        }
        key="2"
      >
        <NavLink to="/content/forms">
          <Forms />
        </NavLink>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Space>
            <BulbOutlined /> Survey
          </Space>
        }
        key="3"
      >
        <NavLink to="/content/survey">
          <Survey />
        </NavLink>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Space>
            <MailOutlined /> Subscriptions
          </Space>
        }
        key="4"
      >
        <NavLink to="content/subscription">
          <Subscriptions />
        </NavLink>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Space>
            <SettingOutlined />
            Images
          </Space>
        }
        key="5"
      >
        <NavLink to="/content/images">
          <Images />
        </NavLink>
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Content;
