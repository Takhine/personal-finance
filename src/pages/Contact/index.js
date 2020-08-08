import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [salary, setSalary] = useState('')
  const [yoe, setYoe] = useState('')
  const [nationality, setNationality] = useState('')
  const [applyFor, setApplyFor] = useState('')
  const [loanAmt, setLoanAmt] = useState('')
  const [employer, setEmployer] = useState('')
  const [emailStatus, setEmailStatus] = useState('')

  const submitForm = (e) => {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the response state and the step
      setEmailStatus(xhr.responseText);
    });

    // open the request with the verb and the url
    xhr.open('GET', 'https://personalfinancegulf.com/contact.php?sendto=' + email +
      '&name=' + name + '&contact=' + contact + '&salary=' + salary +
      '&yoe=' + yoe + '&nationality=' + nationality + '&applyFor=' + applyFor +
      '&loanAmt=' + loanAmt + '&employer=' + employer);

    // send the request
    xhr.send();

    setName('');
    setEmail('');
    setContact('');
    setSalary('');
    setYoe('');
    setNationality('');
    setApplyFor('');
    setLoanAmt('');
    setEmployer('');

    e.preventDefault();
  }

  return (
    <div id="contact">
      <h1 className="main-heading">
        Contact <span>Us</span>
      </h1>
      <h5 className="main-heading">{emailStatus ? emailStatus : null}</h5>
      <div className="contact-form" >
        <Form
          layout="horizontal"
        >
          <Form.Item name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Salary" >
            <Select onChange={e => setSalary(e)}>
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
            onChange={(e) => setYoe(e.target.value)}
            value={yoe}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="employer"
            label="Employer"
            rules={[{ required: true }]}
            onChange={(e) => setEmployer(e.target.value)}
            value={employer}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Apply for" >
            <Select onChange={e => setApplyFor(e)} >
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
            onChange={(e) => setLoanAmt(e.target.value)}
            value={loanAmt}
          >
            <Input />
          </Form.Item>
          <Form.Item className="button-container">
            <Button type="primary" htmlType="submit" onClick={submitForm}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
