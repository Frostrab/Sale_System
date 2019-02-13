
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import Newact from './Newact';

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
},];

export default class Activitie extends PureComponent {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  
  

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'รหัสกิจกรรม',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'กิจกรรม',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    },
        {
          title: ' ',
          dataIndex: 'address',
          key: 'address',
          render: () => (
            <Button type="primary">ประวัติ</Button>,
            <Button type="primary">การใช้งบ</Button>),
        },
    ];
    return (
      <div>
        <h2>รายการกิจกรรม</h2>
        <Button type="primary" style={{marginBottom:10,marginTop:10}}>สร้างใหม่</Button>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      
        {/*<Newact />*/}
      </div>
    );
  }
}

          