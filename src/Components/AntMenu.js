import React, { Children, useState } from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const StyledMenu = styled(Menu)`
  padding: ${(props) => props.padding || "auto"};
  margin: ${(props) => props.margin || "auto"};
  maxwidth: ${(props) => props.maxWidth || "auto"};
`;

const AntMenu = ({ defaultSelectedKeys, defaultOpenKeys, mode, style }) => {
  return (
    <StyledMenu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      style={style}
    >
      <Menu.Item key="general">
        <NavLink to="/site">General</NavLink>
      </Menu.Item>
      <Menu.Item key="seo">
        <NavLink to="site/seo">SEO</NavLink>
      </Menu.Item>
      <Menu.Item key="analysis">
        <NavLink to="site/analysis">Analysis</NavLink>
      </Menu.Item>
      <Menu.Item key="plugin">
        <NavLink to="site/plugin">Plugin</NavLink>
      </Menu.Item>

      <Menu.Item key="content">
        <NavLink to="/site/content">Content</NavLink>
      </Menu.Item>

      <Menu.Item key="assets">
        <NavLink to="site/assests">Assets</NavLink>
      </Menu.Item>
      <Menu.Item key="access">
        <NavLink to="site/access">Access</NavLink>
      </Menu.Item>
      <Menu.Item key="setting">
        <NavLink to="site/setting">Settings</NavLink>
      </Menu.Item>
    </StyledMenu>
  );
};

export default AntMenu;
