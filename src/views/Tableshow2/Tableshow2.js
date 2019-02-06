
import React from 'react';
import 'antd/dist/antd.css';
import { Table,} from 'antd';


const { Column,} = Table;

const data = [{
  key: '1',
  Orgdivision: 'ฝ่ายกรุงเทพฯ 1',
  Planname: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)',
  Forecast: '3,281,221',
  Used: '856,765',
  Balance: '2,424,456',

}, {
  key: '2',
  Orgdivision: 'ฝ่ายกรุงเทพฯ 2',
  Planname: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)',
  Forecast: '15,322,322',
  Used: '7,612,521',
  Balance: '7,709,801',

}, {
  key: '3',
  Orgdivision: 'ฝ่ายกรุงเทพฯ 3',
  Planname: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)',
  Forecast: '732,198',
  Used: '232,123',
  Balance: '500,075',

},  {
  key: '4',
  Orgdivision: 'ฝ่ายกรุงเทพฯ 4',
  Planname: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)',
  Forecast: '11,286,921',
  Used: '2,136,823',
  Balance: '9,150,098',
},  {
  key: '5',
  Orgdivision: 'ฝ่ายกรุงเทพฯ 4',
  Planname: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)',
  Forecast: '987,693',
  Used: '764,543',
  Balance: '223,150',
}
];
export default class Tableshow2 extends React.Component {
render(){
  return(
  <Table dataSource={data}>
 
    <Column width="15%"
      title="Original Division"
      dataIndex="Orgdivision"
    />
    <Column width="40%"
      title="Plan Name"
      dataIndex="Planname"
    />
    <Column width="15%"
      title="Forecast"
      dataIndex="Forecast"
     
    />
    <Column width="15%"
        title="Used"
        dataIndex="Used"
      />
      <Column width="15%"
        title="Balance"
        dataIndex="Balance"
      />
    
  </Table>
  );
  
}
}
