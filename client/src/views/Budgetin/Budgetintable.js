
import React from 'react';
import 'antd/dist/antd.css';
import { Table, } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  avg1m: 0,
  budget: 0,
  product: 'รายรับรวม',
  before: 0,
  current: 0,
}, {
  key: '2',
  avg1m: 0,
  budget: 0,
  product: 'ต้นทุนส่งเสริมการขาย',
  before: 0,
  current: 0,
}, {
  key: '3',
  avg1m: 0,
  budget: 0,
  product: 'สัดส่วนต (%)ต่อยอดขาย',
  before: 0,
  current: 0,
},
{
  key: '4',
  avg1m: 0,
  budget: 0,
  product: 'กำไรสุทธิ',
  before: 0,
  current: 0,
},
{
  key: '5',
  avg1m: 0,
  budget: 0,
  product: 'สัดส่วน (%) ต่อยอดขาย',
  before: 0,
  current: 0,
},];

export default class Budgetintable extends React.Component{
    render(){
        return(
          <div>
          <h2>ตารางงบใบประมาณภายใน</h2>
            <Table dataSource={data} bordered>
<ColumnGroup title="ต้นทาง">
<Column 
      title="ชื่อแผนงาน"
      dataIndex="product"
      key="product"
      width="30%"
    />
    <Column 
      title="หน่วยงาน"
      dataIndex="product"
      key="product"
      width="30%"
    />
    </ColumnGroup>
    <ColumnGroup title="ปลายทาง">
    <Column 
      title="ชื่อแผนงาน"
      dataIndex="product"
      key="product"
      width="30%"
    />
    <Column 
      title="หน่วยงาน"
      dataIndex="product"
      key="product"
      width="30%"
    />
    </ColumnGroup>
    <ColumnGroup title="">
    <Column
      title="งบประมาณ"
      dataIndex="before"
      key="before"
    />
    <Column
      title="สถานะ"
      dataIndex="current"
      key="current"
      
    />
  </ColumnGroup>
  </Table>
        
          </div>
        )
    }
}