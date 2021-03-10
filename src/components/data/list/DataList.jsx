import React from 'react';
import {Table} from 'antd';
import {withRouter} from 'react-router';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

class DataList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedInfo: null,
    }
  }
  onChange = (pagination, filters, sorter, extra) => {
    this.setState({
      sortedInfo: sorter,
    });
  }

  handleDeleteClick = (id) => {
    this.props.onDelete(id);
  }

  handleEditClick = (e, record) => {
    e.stopPropagation();
    this.props.onEdit(record);
  }

  handleDeleteClick = (e, id) => {
    e.stopPropagation();
    this.props.onDelete(id);
  }

  render() {
    let sortedInfo = this.state.sortedInfo || {};
    const columns = [
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        sorter: (a, b) => a.company.localeCompare(b.company),
      },
      {
        title: 'Customer',
        dataIndex: 'customer',
        sorter: (a, b) => a.customer.localeCompare(b.customer),
      },
      {
        title: 'Fiscal year',
        dataIndex: 'fiscal_year',
        sorter: (a, b) => a.fiscal_year - b.fiscal_year,
      },
      {
        title: 'Document number',
        dataIndex: 'document_num',
        sorter: (a, b) => a.document_num - b.document_num,
      },
      {
        title: 'Document type',
        dataIndex: 'document_type',
        sorter: (a, b) => a.document_type.localeCompare(b.document_type),
      },
      {
        title: 'Bank',
        dataIndex: 'bank',
        sorter: (a, b) => a.bank.localeCompare(b.bank),
      },
      {
        title: 'Document period',
        dataIndex: 'document_period',
        sorter: (a, b) => a.document_period - b.document_period,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Currency',
        dataIndex: 'currency',
        sorter: (a, b) => a.currency.localeCompare(b.currency),
      },
      /*{
        title: 'Service',
        dataIndex: 'service',
        sorter: (a, b) => a.service.length - b.service.length,
      },*/
      { 
        title: 'Is paid',
        dataIndex: 'is_paid',
        sorter: (a, b) => a.is_paid - b.is_paid,
        render: item => item ? 'yes' : 'no'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: record => <React.Fragment><EditOutlined onClick={(e) => this.handleEditClick(e, record)}/><DeleteOutlined onClick={(e) => this.handleDeleteClick(e, record.id)} /></React.Fragment>,
      },
    ];

    return (
      <Table
        dataSource={this.props.data}
        columns={columns}
        onChange={this.onChange}
        pagination={{ defaultPageSize: 25, showSizeChanger: true, pageSizeOptions: ['25', '50', '100']}}
      />
    );
  }
}

export default withRouter(DataList);