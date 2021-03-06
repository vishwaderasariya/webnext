import React from "react";
import styled from "styled-components";
import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const StyledMenu = styled(Menu)`
  padding: ${(props) => props.padding || "auto"};
  margin: ${(props) => props.margin || "auto"};
  maxwidth: ${(props) => props.maxWidth || "auto"};
`;

const ContentMenu = ({
  defaultSelectedKeys,
  defaultOpenKeys,
  mode,
  style,
  padding,
  margin,
  maxWidth,
}) => {
  return (
    <StyledMenu
      padding={padding}
      maxWidth={maxWidth}
      margin={margin}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      style={style}
    >
      <Menu.Item key="blog">
        <NavLink to="/site/content/blog">
          <UserOutlined /> Blog
        </NavLink>
      </Menu.Item>

      <Menu.Item key="form">
        <NavLink to="/site/content/form">
          <SettingOutlined />
          Form
        </NavLink>
      </Menu.Item>
      <Menu.Item key="survey">
        <NavLink to="/site/content/survey">
          <BulbOutlined />
          Survey
        </NavLink>
      </Menu.Item>
      <Menu.Item key="subscription">
        <NavLink to="/site/content/subscription">
          <MailOutlined />
          Subscription
        </NavLink>
      </Menu.Item>
    </StyledMenu>
  );
};

export default ContentMenu;
