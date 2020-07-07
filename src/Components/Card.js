import React from "react";
import { Card as AntCard, Typography, Space } from "antd";
import styled from "styled-components";

const StyledCard = styled(AntCard)`
  minheight: ${(props) => props.minHeight || "auto"} px;
  padding: ${(props) => props.padding || "auto"};
  size: ${(props) => (props.size === 0 ? 0 : 24)} px;
  margin: ${(props) => props.margin || "auto"};
  maxwidth: ${(props) => props.maxWidth || "auto"};
`;

const Card = ({
  height,
  padding,
  size,
  children,
  title,
  bordered,
  style,
  extra,
  headStyle,
  maxWidth,
  margin,
}) => {
  return (
    <StyledCard
      height={height}
      padding={padding}
      size={size}
      title={title}
      bordered={bordered}
      style={style}
      extra={extra}
      headStyle={headStyle}
      maxWidth={maxWidth}
      margin={margin}
    >
      <Space direction="vertical" style={{ lineHeight: "12px" }}>
        <Typography.Text>Summary</Typography.Text>
        <Typography.Text>Analytics</Typography.Text>
        <Typography.Text>Other</Typography.Text>
        <Typography.Text>info</Typography.Text>
      </Space>
    </StyledCard>
  );
};

export default Card;
