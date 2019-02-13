
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card, } from 'antd';

//import './index.css';
import Buttonmodal2 from './Buttonmodal2';


const { Column, ColumnGroup } = Table;



export default class List2 extends PureComponent{

    state = {


        
        data1:[{
            
          key: '1',
          listname: 'เอก สมหมาย',
          
        },{
        
          key: '2',
          listname: 'สมคิด อาจหาญ',
        },
        {
          key: '3',
          listname: 'ปราการ ใจกล้า',
        },
         {
          key: '4',
          listname: 'กิจการ รุ่งเรือง',
        }, {
          key: '5',
          listname: 'ประกิจ บุญอำนวย',
        }, {
          key: '6',
          listname: 'สมคิด กิจบุญมา',
        }, {
          key: '7',
          listname: 'เขมประภัทร ลี',
        },{
          key: '8',
          listname: 'กิจจา เพชรแท้',
        },{
          key: '9',
          listname: 'ธนากร มงคลเลิศ',
        }, {
          key: '10',
          listname: 'กศิน สุริยะกล้า',
        },],
           col1:[{
            title: 'รายชื่อ',
            dataIndex: 'listname',
            key: 'listname',
            width:'70%',
            
          },{
            title:'',
            width:'10%',
            render: () => (
              <Buttonmodal2 /> ),
          },
          ],
         
      
     
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
          

