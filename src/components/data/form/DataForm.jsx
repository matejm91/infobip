import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import {companies} from 'companies';

const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class DataForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  handleCancel = () => {
    this.props.onCancel();
  }

  render () {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator ('company', {
            initialValue: this.props.record ? this.props.record.company : '',
            rules: [{required: true, message: 'Please input company name!'}],
          }) (
            <Select
              placeholder="Company name"
            >
              {companies.map((company, i) => (<Option key={i} value={company}>{company}</Option>))}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('customer', {
            initialValue: this.props.record ? this.props.record.customer : '',
            rules: [{required: true, message: 'Please input customer name!'}],
          }) (
            <Input
              placeholder="Customer name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('fiscal_year', {
            initialValue: this.props.record ? this.props.record.fiscal_year : '',
            rules: [{required: true, message: 'Please input fiscal year!'}],
          }) (
            <Input
              type='number'
              placeholder="Fiscal year"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('document_num', {
            initialValue: this.props.record ? this.props.record.document_num : '',
            rules: [{required: true, message: 'Please input document number!'}],
          }) (
            <Input
              type='number'
              placeholder="Document number"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('document_type', {
            initialValue: this.props.record ? this.props.record.document_type : '',
            rules: [{required: true, message: 'Please input document type!'}],
          }) (
            <Input
              placeholder="Document type"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('bank', {
            initialValue: this.props.record ? this.props.record.bank : '',
            rules: [{required: true, message: 'Please input bank name!'}],
          }) (
            <Input
              placeholder="Bank name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('document_period', {
            initialValue: this.props.record ? this.props.record.document_period : '',
            rules: [{required: true, message: 'Please input document period!'}],
          }) (
            <Input
              placeholder="Document period"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('amount', {
            initialValue: this.props.record ? this.props.record.amount : '',
            rules: [{required: true, message: 'Please input amount!'}],
          }) (
            <Input
              placeholder="Amount"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('currency', {
            initialValue: this.props.record ? this.props.record.currency : '',
            rules: [{required: true, message: 'Please input currency!'}],
          }) (
            <Input
              placeholder="Currency"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('service', {
            initialValue: this.props.record ? this.props.record.service : '',
            rules: [{required: true, message: 'Please input service name!'}],
          }) (
            <Input
              placeholder="Service"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator ('is_paid', {
            valuePropName: 'checked',
            initialValue: this.props.record ? this.props.record.is_paid : false,
          }) (
            <Checkbox
              placeholder="Is paid"
            />
          )}
        </Form.Item>
        <Button onClick={this.handleCancel}>Cancel</Button>
        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Submit</Button>
      </Form>
    );
  }
}

const WrappedDataForm = Form.create ({name: 'data_form'}) (DataForm);

export default WrappedDataForm;
