import React from 'react';
import {Input, Row, Col, Button, Icon} from 'antd';
import 'assets/style/dataView.css';

class DataHeader extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      additionalFiltersShown: false,
    };
  }
  handleChange = e => {
    this.props.onFilterChange(e.target.value, e.target.name);
  };

  handleAddNewRecordClick = () => {
    this.props.onCreateClick();
  };

  handleToggleAdditionalFilters = () => {
    this.setState ({
      additionalFiltersShown: !this.state.additionalFiltersShown,
    });
  };

  render () {
    const {additionalFiltersShown} = this.state;
    const moreFilters = (
      <React.Fragment>
        <Row>
          <Col span={8}>
            <Input
              name='bank'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by bank name"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='document_period'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by document period"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='amount'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by amount"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <Input
              name='currency'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by currency"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='service'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by service"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='paid_status'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by is paid status"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Row>
          <Col span={8}>
            <Input
              name='company'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by company name"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='customer'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by customer"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <Input
              name='fiscal_year'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by fiscal year"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='document_num'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by document number"
              onChange={this.handleChange}
            />
          </Col>
          <Col span={8}>
            <Input
              name='document_type'
              className='infobip-dataView__dataHeaderInput'
              placeholder="Filter by document type"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={3} offset={6}>
            <Button onClick={this.handleToggleAdditionalFilters}>
              More filters
              {' '}
              <Icon type={additionalFiltersShown ? 'up' : 'down'} />
            </Button>
          </Col>
          <Col span={3} offset={6}>
            <Button onClick={this.handleAddNewRecordClick}>
              Add new record
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          {additionalFiltersShown && moreFilters}
        </Row>
      </React.Fragment>
    );
  }
}

export default DataHeader;
