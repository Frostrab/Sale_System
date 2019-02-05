
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';


const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  section: 'ฝ่ายกลางบน',
  area: 'จังหวัดชัยนาท',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ หนึ่ง',
  Approval:'นายทดสอบ หนึ่ง',
  Date:'22 พ.ค. 61'

}, {
  key: '2',
  section: 'ฝ่ายกลางบน',
  area: 'จังหวัดเชียงใหม่,ลำพูน',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561/ เชียงใหม่',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ สอง',
  Approval:'นายทดสอบ สอง',
  Date:'4 พ.ค. 61',
}, {
  key: '3',
  section: 'ฝ่ายเหนือบน',
  area: 'จังหวัดเชียงใหม่,ลำพูน',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561/ เชียงใหม่',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ สาม',
  Approval:'นายทดสอบ สาม',
  Date:'4 พ.ค. 61',
},  {
  key: '4',
  section: 'ฝ่ายกลางล่าง',
  area: 'จังหวัดนครปฐม',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ สี่',
  Approval:'นายทดสอบ สี่',
  Date:'22 พ.ค. 61',
},  {
  key: '5',
  section: 'ฝ่ายกลางล่าง',
  area: 'จังหวัดนครปฐม',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ ห้า',
  Approval:'นายทดสอบ ห้า',
  Date:'22 พ.ค. 61',
},{
  key: '6',
  section: 'ฝ่ายเหนือล่าง',
  area: 'จังหวัดนครสวรรค์',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายทดสอบ หก',
  Approval:'นายทดสอบ หก',
  Date:'10 พ.ค. 61',
},{
  key: '7',
  section: 'ฝ่ายกรุงเทพฯ',
  area: 'เขตกรุงเทพฯ 1',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายกรุงเทพ หนึ่ง',
  Approval:'นายกรุงเทพ หนึ่ง',
  Date:'1 พ.ค. 61',
},{
  key: '8',
  section: 'ฝ่ายกรุงเทพฯ',
  area: 'เขตกรุงเทพฯ 1',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายกรุงเทพ สอง',
  Approval:'นายกรุงเทพ สอง',
  Date:'3 พ.ค. 61',
},{
  key: '9',
  section: 'ฝ่ายกรุงเทพฯ',
  area: 'เขตกรุงเทพฯ 1',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายกรุงเทพ สาม',
  Approval:'นายกรุงเทพ สาม',
  Date:'4 พ.ค. 61',
},{
  key: '10',
  section: 'ฝ่ายกรุงเทพฯ',
  area: 'เขตกรุงเทพฯ 1',
  activename: 'งานสนับสนุนส่งเสริมทางการขาย (Trade)/On-Premise : Trade agreement :งบประมาณสัญญาร้านค้าปี2561',
  costdetail: 'ค่าส่งเสริมการขาย-เงินสนับสนุน',
  Provider: 'นายกรุงเทพ สี่',
  Approval:'นายกรุงเทพ สี่',
  Date:'4 พ.ค. 61',
},
];
export default class Tableshow extends React.Component {
render(){
  return(
  <Table dataSource={data}>
 
    <Column width="10%"
      title="ฝ่าย"
      dataIndex="section"
      key="section"
    />
    <Column width="10%"
      title="เขต"
      dataIndex="area"
      key="area"
    />
    <Column width="25%"
      title="ชื่อแผนงาน"
      dataIndex="activename"
      key="activename"
     
    />
    <Column width="15%"
        title="รายละเอียดค่าใช้จ่าย"
        dataIndex="costdetail"
        key="costdetail"
      />
      <Column width="15%"
        title="ผู้จัดทำ"
        dataIndex="Provider"
        key="Provider"
      />
      <Column width="15%"
        title="ผู้ขออนุมัติ"
        dataIndex="Approval"
        key="Approval"
      />
      <Column width="15%"
        title="วันที่สร้าง"
        dataIndex="Date"
        key="Date"
      />
    
  </Table>
  );
  
}
}
