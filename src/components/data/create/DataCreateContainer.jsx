import React from 'react';
import {withRouter} from 'react-router';
import DataForm from 'components/data/form/DataForm';

class DataCreateContainer extends React.Component {
  handleSubmit = (data) => {
    this.props.onSubmit(data);
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    return (
      <DataForm onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
    );
  }
}

export default withRouter(DataCreateContainer);