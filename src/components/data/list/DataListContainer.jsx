import React from 'react';
import {Modal, Button } from 'antd';
import { dummyData } from 'dummyData';
import DataList from 'components/data/list/DataList';
import DataFooter from 'components/data/list/DataFooter';
import DataHeader from 'components/data/list/DataHeader';
import DataForm from 'components/data/form/DataForm';
import DataUpdateContainer from 'components/data/update/DataUpdateContainer';
import DataCreateContainer from 'components/data/create/DataCreateContainer';

class DataListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isModalVisible: false,
      page: 1,
      size: 25,
      numOfPages: 0,
      modalContent: null,
    };
  }

  componentDidMount() {
    const data = JSON.parse(JSON.stringify(dummyData));

    this.setState({
      data,
    });
  }

  handlePageSizeChange = (pageSize) => {
    this.setState({
      size: pageSize
    });
  }

  handleFilterChange = (filterValue, filterField) => {
    if (filterValue.trim() !== '') {
      let filteredData = this.state.data.filter(dataItem =>
        dataItem[filterField].toLowerCase().includes(filterValue.toLowerCase())
      );

      this.setState({
        data: filteredData,
        page: 1,
      });
    } else {      
        this.setState({
          data: JSON.parse(JSON.stringify(dummyData)),
        });
    }
  }

  handleDeleteClick = (id) => {
    const content = (
      <React.Fragment>
        <p>Are you sure you want to delete this item?</p>
        <Button type="danger" onClick={() => this.handleDelete(id)}>Yes</Button>&nbsp;
        <Button onClick={this.handleCancel}>No</Button>
      </React.Fragment>
    )
    this.setState({
      modalContent: content,
      isModalVisible: true,
    });
  }

  handleEditClick = (record) => {
    this.setState({
      modalContent: <DataUpdateContainer record={record} onSubmit={this.handleUpdate} onCancel={this.handleCancel} />,
      isModalVisible: true,
    })
  }

  handleCreateClick = () => {
    this.setState({
      modalContent: <DataCreateContainer onSubmit={this.handleCreate} onCancel={this.handleCancel} />,
      isModalVisible: true,
    })
  }

  handleDelete = (id) => {
    let data = [...this.state.data];
    let indexToUpdate = data.findIndex(item => item.id === id);

    data.splice(indexToUpdate, 1);

    this.setState({
      data: data,
      modalContent: null,
      isModalVisible: false,
    });
  }

  handleUpdate = (updateData) => {
    let data = [...this.state.data];
    let indexToUpdate = data.findIndex(item => item.id === updateData.id);

    data.splice(indexToUpdate, 1, updateData);

    this.setState({
      data: data,
      modalContent: null,
      isModalVisible: false,
    });
  }

  handleCreate = (createData) => {
    createData.id = this.state.data.reduce((lastId, currentItem, currentIndex, array) => {
      if (array[currentIndex + 1] && currentItem.id < array[currentIndex + 1].id) {
        lastId = array[currentIndex + 1].id
      }
      return lastId + 1;
    });
    let data = [...this.state.data];
    data.push(createData);
    this.setState({
      data: data,
      modalContent: null,
      isModalVisible: false,
    });
  }
  
  handleCancel = () => {
    this.setState({
      modalContent: null,
      isModalVisible: false,
    });
  }

  render() {
    const { page, size, data, numOfPages, isModalVisible, modalContent } = this.state;
    return (
      <React.Fragment>
        <DataHeader onFilterChange={this.handleFilterChange} onCreateClick={this.handleCreateClick}/>
        <DataList data={data} size={size} onDelete={this.handleDeleteClick} onEdit={this.handleEditClick}/>
        {isModalVisible && 
          (<Modal visible={true} footer={null} onCancel={this.handleCancel}>
            <div>{modalContent}</div>
          </Modal>)}
      </React.Fragment>
    )
  }
}

export default DataListContainer;