import React from 'react';
import { PageHeader, Button, Descriptions} from 'antd';
import 'assets/style/userInfo.css';

class UserInfo extends React.Component {
  render () {
    return (
      <PageHeader
        className='infobip-userInfoView__userInfo'
        ghost={false}
        backIcon={false}
      >
        <Descriptions size="small" column={4}>
          <Descriptions.Item label="Username">Testiljko Testic</Descriptions.Item>
          <Descriptions.Item label="Address">Test street 29c</Descriptions.Item>
          <Descriptions.Item label="Email address">testiljkotestic@test.com</Descriptions.Item>
          <Descriptions.Item label="Legal entity">Company: Infobip Hrvatska</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    );
  }
}

export default UserInfo;
