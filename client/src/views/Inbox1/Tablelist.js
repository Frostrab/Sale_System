import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Input, Button, Form, Card, } from 'antd';
import Row1 from './Row1';


const { Column, ColumnGroup } = Table;




export default class Tablelist extends PureComponent{

    state = {
        col1:[{
            title: 'ระบบ',
            dataIndex: 'system',
            key:'system',
        },
        {
            title: 'หมายเลข',
            dataIndex: 'number',
            key:'number',
        },
        {
            title: 'ชื่อรายการ',
            dataIndex: 'listname',
            key:'listname',
        },
        {
            title: 'ตัวแทน/ร้านค้า',
            dataIndex: 'shop',
            key:'shop',
        },
        {
            title: 'จำนวนเงิน',
            dataIndex: 'amount',
            key:'amount',
        },
        {
            title: 'จาก',
            dataIndex: 'from',
            key:'from',
        },
        {
            title: 'หน่วยงาน',
            dataIndex: 'team',
            key:'team',
        },
        {
            title: '',
            width:'8%',
            render: () => (
                <Row1 /> ),
        },],
        data1:[{
            system:"JOB",
            number:"JOB12013020",
            listname:"ใบขออนุมัติ Job จาก นาย กิตติ กันยา",
            shop:"",
            amount:"100",
            from:"กิตติ กันยา",
            team:"กรุงเทพ",
            
            
        },
        {
            system:"JOB",
            number:"JOB12345678",
            listname:"ใบขออนุมัติ Job จาก นาย สังขยา หมูนุ่ม",
            shop:"",
            amount:"500",
            from:"สังขยา หมูนุ่ม",
            team:"จังหวัดชลบุรี",
        },
        {
            system:"JOB",
            number:"JOB12013267",
            listname:"ใบขออนุมัติ Job จาก นาย พิพัฒ ปลากัด",
            shop:"บริษัท อิมมอทัล จำกัด",
            amount:"100",
            from:"พิพัฒ ปลากัด",
            team:"จังหวัดอยุธยา",
        },
        {
            system:"JOB",
            number:"JOB12019876",
            listname:"ใบขออนุมัติ Job จาก นาย สงกรานต์ ปีใหม่",
            shop:"",
            amount:"200",
            from:"สงกรานต์ ปีใหม่",
            team:"กรุงเทพ",
        },
        {
            system:"JOB",
            number:"JOB12011010",
            listname:"ใบขออนุมัติ Job จาก นาย อภิวัฒ นาฬิกา",
            shop:"บริษัท เบิกบาน จำกัด",
            amount:"100",
            from:"อภิวัฒ นาฬิกา",
            team:"จังหวัดสระบุรี",
        },]

    }


    render(){
        
        return(
            <div>
              

  <Table  
            bordered={true} 
            size="small" 
            columns={this.state.col1} 
            dataSource={this.state.data1}
            pagination={false} />

               
            </div>
        )
    }
}