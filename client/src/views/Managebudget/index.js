import React, { PureComponent } from 'react'
import 'antd/dist/antd.css';

import { Collapse } from 'antd';

import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Tablebudget from './Tablebudget';
import Newplan from './Newplan';
import Newminiplan from './Newminiplan';
import Showplan from './Showplan';
import Copyplan from './Copyplan';
import Fixplan from './Fixplan';
import Deleteplan from './Deleteplan';
const Panel = Collapse.Panel;


function callback(key) {
  console.log(key);
}   

export default class index  extends PureComponent{

  state = { visible1: false}

  showTable = () => {
    console.log('Clicked')
    this.setState({
      visible1: true,
    });
  }

  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
 
    render(){
        return(
            <div>
              <h2>การจัดการงบประมาณ</h2>
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายการแสดงงบประมาณ" key="1">
            <FormGroup row>
                <Label sm={2}>ปี</Label>
                <Col sm={3}>
            <Input type="select" name="year" id="year" />
          </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>แผนงาน</Label>
                <Col sm={3}>
            <Input type="select" name="plan" id="plan" />
          </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>หน่วยงาน</Label>
                <Col sm={3}>
            <Input type="select" name="group" id="group" />
          </Col>
            </FormGroup>
            <Button color="warning" style={{marginBottom:10}} onClick={this.showTable} >ค้นหา</Button>{' '}
          </Panel>
          
        </Collapse>
        <Button type="primary">สร้างแผนงาน</Button>
        <Button type="primary" style={{margin:20}}>สร้างแผนงานย่อย</Button>
        {/*<Tablebudget />
        
        <Newplan />
        <Newminiplan />
        <Showplan />
        <Fixplan />
        <Copyplan />
        <Deleteplan />*/}
        </div>
      );
}
}  
    