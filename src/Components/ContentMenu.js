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
        <NavLink to="/content/blog">
          <UserOutlined /> Blog
        </NavLink>
      </Menu.Item>

      <Menu.Item key="form">
        <SettingOutlined />
        Form
      </Menu.Item>
      <Menu.Item key="survey">
        <BulbOutlined />
        Survey
      </Menu.Item>
      <Menu.Item key="subscription">
        <MailOutlined />
        Subscription
      </Menu.Item>
    </StyledMenu>
  );
};

export default ContentMenu;
