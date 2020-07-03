import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const DELETE_SITE = gql`
  mutation deletesite($input: deleteSiteInput) {
    deleteSite(input: $input) {
      site {
        id
        name
      }
    }
  }
`;

function UpdateSite() {
  const [formData, setformData] = useState({});
  console.log(formData);

  return (
    <Card title="Update Site">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item label="id" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Mutation
          mutation={DELETE_SITE}
          variables={{
            input: {
              where: {
                id: formData.id,
              },
            },
          }}
        >
          {(deleteSite) => (
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={deleteSite}>
                Delete
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default UpdateSite;
