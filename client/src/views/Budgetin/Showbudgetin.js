
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
import Budgetinform from './BudgetinForm';
const RadioGroup = Radio.Group;

const Panel = Collapse.Panel;



export default class Showbudgetin extends PureComponent {
  state = {
    value: 1,
  }

  
  render() {
    return (
        <div>
            <h2>แสดงแผนงาน</h2>
        <Budgetinform />
        
        <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
      
        </div>
        
    );
  }
}

