import React from "react";
import { Badge, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";

function Notification() {
  return (
    <div>
      <Button
        icon={
          <Badge count={22}>
            <BellOutlined style={{ fontSize: 20 }} />
          </Badge>
        }
        type="text"
      ></Button>
    </div>
  );
}

export default Notification;
