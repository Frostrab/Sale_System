
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
},];

export default class Updtable extends PureComponent {
 
  render() {
    
    const columns = [{
      title: 'กิจกรรม',
      dataIndex: 'name',
      key: 'name',
      
    }, {
      title: 'ชื่อกิจกรรม',
      dataIndex: 'age',
      key: 'age',
      
    }, {
      title: 'แผนงาน',
      dataIndex: 'address',
      key: 'address',
      
    }, {
        title: 'แผนงานย่อย',
        dataIndex: 'address',
        key: 'address',
    }
    , 
        {
          title: 'หน่วยงาน',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'IO/GL',
          dataIndex: 'address',
          key: 'address',
        },{
          title: 'งบประมาณ',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'คงเหลือ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'การคุมงาน',
            dataIndex: 'address',
            key: 'address',
          },
        {
          title: ' ',
          dataIndex: 'address',
          key: 'address',
          render: () => (
            <Button type="primary">ประวัติ</Button>,
            <Button type="primary">การใช้งบ</Button>,
            <Button type="primary">การใช้งบ</Button>,
            <Button type="primary">การใช้งบ</Button>),
        },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      
      </div>
    );
  }
}

          