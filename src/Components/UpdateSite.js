import React, { useState } from "react";
import { Card, Form, Input, Select, Button } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPDATE_SITE = gql`
  mutation updatesite($input: updateSiteInput) {
    updateSite(input: $input) {
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
    <Card title="Delete Site">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item label="id" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Site status" name="status">
          <Select placeholder="site status">
            <Select.Option value="PUBLISHED">PUBLISHED</Select.Option>
            <Select.Option value="DRAFT">DRAFT</Select.Option>
          </Select>
        </Form.Item>
        <Mutation
          mutation={UPDATE_SITE}
          variables={{
            input: {
              where: {
                id: formData.id,
              },
              data: {
                name: formData.name,
                status: formData.status,
              },
            },
          }}
        >
          {(updateSite) => (
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={updateSite}>
                Update
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default UpdateSite;
