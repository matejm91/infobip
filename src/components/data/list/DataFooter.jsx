import React from 'react';
import {Pagination} from 'antd';

class DataFooter extends React.Component {
  handleChange = (e, page) => {
    this.props.onChange(page);
  }

  handlePageSizeChange = (current, size) => {
    this.props.onPageSizeChange(size);
  }

  render() {
    return (
      <Pagination
        showSizeChanger
        onShowSizeChange={this.handlePageSizeChange}
        onChange={this.handleChange}
      />
    )
  }
}

export default DataFooter;