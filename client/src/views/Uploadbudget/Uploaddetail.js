
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import Updtable from './Updtable'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
import Uploads1 from './Upload1';

const RadioGroup = Radio.Group;

const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
  }

export default class Uploaddetail extends PureComponent {
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
          <h2>รายละเอียดใบงบประมาณที่ Upload</h2>
        <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
        <Panel key="1" header='รายละเอียด'>
        <Form>
        <FormGroup row>
        
        <Label sm={2}>การจัดการ</Label>
         <Col >
        <RadioGroup onChange={this.onChange} value={this.state.value} width={"20%"}>
          <Radio value={1} >Replace</Radio>
          <Radio value={2} >Add</Radio>
        </RadioGroup>
        </Col>   
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>ปี</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>ไฟล์</Label>
          <Col sm={3}>
          <Uploads1 />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>หมายเหตุ</Label>
          <Col sm={3}>
          <Input type="textarea" name="activitie" id="activitie" />
            
          </Col>
        </FormGroup>
        </Form>
        </Panel>
     
        </Collapse>
        <Updtable />
        <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
        <Button color="info" style={{marginBottom:10}}>ตรวจสอบ</Button>{' '}
        <Button color="primary" style={{marginBottom:10}}>Upload ข้อมูล</Button>{' '}
        
        </div>
        
    );
  }
}

