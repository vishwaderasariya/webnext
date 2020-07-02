import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "antd/dist/antd.css";

const CREATE_PAGE = gql`
  mutation createPage($input: createPageInput) {
    createPage(input: $input) {
      page {
        name
        slug
      }
    }
  }
`;
function CreatePage() {
  const [formData, setformData] = useState({});

  console.log(formData);

  return (
    <Card title="create page">
      <Form
        onValuesChange={(e) => {
          setformData({ ...formData, ...e });
        }}
      >
        <Form.Item label="page name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="slug"
          name="slug"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="page status"
          name="status"
          rules={[{ required: true }]}
        >
          <Select placeholder="page status">
            <Select.Option value="PUBLISHED">PUBLISHED</Select.Option>
            <Select.Option value="DRAFT">DRAFT</Select.Option>
          </Select>
        </Form.Item>
        <Mutation
          mutation={CREATE_PAGE}
          variables={{
            input: {
              data: {
                name: formData.name,
                status: formData.status,
                slug: formData.slug,
              },
            },
          }}
        >
          {(pageData) => (
            <Form.Item>
              <Button type="primary" onClick={pageData} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          )}
        </Mutation>
      </Form>
    </Card>
  );
}

export default CreatePage;
