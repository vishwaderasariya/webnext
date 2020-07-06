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
const GeneralMenu = ({
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
        <NavLink to="/site/gerneral/domain">
          <UserOutlined /> Domain
        </NavLink>
      </Menu.Item>

      <Menu.Item key="form">
        <NavLink to="/site/general/status">
          <SettingOutlined />
          Status
        </NavLink>
      </Menu.Item>
      <Menu.Item key="survey">
        <NavLink to="/site/general/security">
          <BulbOutlined />
          Security
        </NavLink>
      </Menu.Item>
      <Menu.Item key="subscription">
        <NavLink to="/site/general/proxy">
          <MailOutlined />
          Proxy
        </NavLink>
      </Menu.Item>
    </StyledMenu>
  );
};
export default GeneralMenu;
