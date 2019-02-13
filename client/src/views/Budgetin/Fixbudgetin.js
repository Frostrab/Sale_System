
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
import Budgetinform from './BudgetinForm';


export default class Fixbudgetin extends PureComponent {

  render() {
    return (
        <div>
            <h2>แก้ไขแผนงาน</h2>
        <Budgetinform />
        
        <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
        <Button color="info" style={{marginBottom:10}}>บันทึก</Button>{' '}
        <Button color="primary" style={{marginBottom:10}}>อนุมัติ</Button>{' '}
      
        </div>
        
    );
  }
}

