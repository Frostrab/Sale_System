
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Card } from 'antd';

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
},];

export default class Tablebudget extends PureComponent {
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
      title: 'ชื่อกิจกรรม',
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
      title: 'แผนงาน',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'แผนงานย่อย',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }, {
        title: 'ชื่อแผนงาน',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],}, 
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
        <Card>
        <Table 
        columns={columns} 
        dataSource={data} 
        onChange={this.handleChange}
        pagination={false} />
      </Card>
      </div>
    );
  }
}

          