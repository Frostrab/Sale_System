
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
import Budgetinform from './BudgetinForm';
const RadioGroup = Radio.Group;

const Panel = Collapse.Panel;



function callback(key) {
    console.log(key);
  }

export default class Newbudgetin extends PureComponent {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
        <div>
            <h2>สร้างแผนงาน</h2>
        <Budgetinform />
        
        <Button color="warning" style={{marginBottom:10}}>สร้างใหม่</Button>{' '}
        <Button color="info" style={{marginBottom:10}}>บันทึก</Button>{' '}
        <Button color="primary" style={{marginBottom:10}}>อนุมัติ</Button>{' '}
      
        </div>
        
    );
  }
}

