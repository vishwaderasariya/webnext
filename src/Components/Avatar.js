import React from "react";
import { Avatar as AntAvatar } from "antd";
import styled from "styled-components";

const StyledAvatar = styled(AntAvatar)`
  size: ${(props) => (props.size === 0 ? 0 : 24)} px;
  shape: ${(props) => props.shape || "auto"};
  color: ${(props) => props.color || "auto"};
`;

const Avatar = ({ size, shape, color, src }) => {
  return (
    <StyledAvatar
      size={size}
      shape={shape}
      color={color}
      src={src}
    ></StyledAvatar>
  );
};

export default Avatar;
