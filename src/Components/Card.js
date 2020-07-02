import React from "react";
import { Card as AntCard } from "antd";
import styled from "styled-components";

const StyledCard = styled(AntCard)`
  minheight: ${(props) => props.minHeight || "auto"} px;
  padding: ${(props) => props.padding || "auto"};
  size: ${(props) => (props.size === 0 ? 0 : 24)} px;
  margin: ${(props) => props.margin || "auto"};
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
    >
      {children}
    </StyledCard>
  );
};

export default Card;
