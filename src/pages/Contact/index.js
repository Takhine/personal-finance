import React from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

export default function Contact() {
  return (
    <div id="contact">
      <h1 className="main-heading">
        Contact <span>Us</span>
      </h1>
      <div className="contact-form">
        <Form
          layout="horizontal"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Contact" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Salary">
            <Select>
              <Select.Option value="10">Min AED 10,000</Select.Option>
              <Select.Option value="10to15">10,000-15,000</Select.Option>
              <Select.Option value="15to20">15,000-20,000</Select.Option>
              <Select.Option value="20to25">20,000-25,000</Select.Option>
              <Select.Option value="25+">25,000 & above</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="years"
            label="Years of Empolyment"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Apply for">
            <Select>
              <Select.Option value="credit card">Credit Card</Select.Option>
              <Select.Option value="personal loan">Personal Loan</Select.Option>
              <Select.Option value="auto loan">Auto Loan</Select.Option>
              <Select.Option value="home loan">Home Loan</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="amount"
            label="Loan Amount"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="button-container">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
