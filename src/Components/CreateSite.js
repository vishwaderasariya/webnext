import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_SITE = gql`
  mutation createSite($input: createSiteInput!) {
    createSite(input: $input) {
      site {
        name
        domain
      }
    }
  }
`;

function CreateSite() {
  const [formData, setformData] = useState({});

  console.log(formData);
  return (
    <Card title="create site">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item label="Site name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="domain" name="domain" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Site status"
          name="status"
          rules={[{ required: true }]}
        >
          <Select placeholder="site status">
            <Select.Option value="PUBLISHED">PUBLISHED</Select.Option>
            <Select.Option value="DRAFT">DRAFT</Select.Option>
          </Select>
        </Form.Item>
        <Mutation
          mutation={CREATE_SITE}
          variables={{
            input: {
              data: {
                name: formData.name,
                status: formData.status,
                domain: formData.domain,
              },
            },
          }}
        >
          {(createData) => (
            <Form.Item>
              <Button type="primary" onClick={createData} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default CreateSite;
