import React from 'react';
import {dummyData} from 'dummyData';
import DataForm from 'components/data/form/DataForm';

class DataUpdateContainer extends React.Component {
  handleSubmit = data => {
    data.id = this.props.record.id;
    this.props.onSubmit(data);
  };

  handleCancel = () => {
    this.props.onCancel();
  };

  render () {
    const {record} = this.props;
    return (
      <DataForm
        record={record}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    );
  }
}

export default DataUpdateContainer;
