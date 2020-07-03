import React, { Children, useState } from "react";
import styled from "styled-components";
import { Menu } from "antd";

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
      <Menu.Item key="general">General</Menu.Item>
      <Menu.Item key="seo">SEO</Menu.Item>
      <Menu.Item key="analysis">Analysis</Menu.Item>
      <Menu.Item key="plugin">Plugin</Menu.Item>
      <Menu.Item key="content">Content</Menu.Item>
      <Menu.Item key="assets">Assets</Menu.Item>
      <Menu.Item key="access">Access</Menu.Item>
      <Menu.Item key="setting">Settings</Menu.Item>
    </StyledMenu>
  );
};

export default AntMenu;
