
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

import { Button, } from 'reactstrap';
import Activeform from './Activeform';


export default class Newact extends PureComponent {
    render(){
        return(

        <div>
            <h2>สร้างกิจกรรม</h2>
            <Activeform />
            <Button type="warning" style={{marginTop:10 ,marginBottom:10}}>ย้อนกลับ</Button>
            <Button type="primary" style={{margin:20 ,marginTop:10 ,marginBottom:10 }}>บันทึก</Button>
  </div>
);
}
}
          