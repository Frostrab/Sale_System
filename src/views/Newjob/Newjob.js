import React, { PureComponent } from 'react'
import Uploads from './Uploads'
import Tables from './Tables'
import Tables2 from './Tables2'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Icon, Steps, Card } from 'antd';
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;


function callback(key) {
  console.log(key);
}

const Step = Steps.Step;
export default class Newjob extends PureComponent {

  render() {
    return (
      <div style={{marginBottom:20,backgroundColor:"#e6f7ff"}} >
      <div style={{display:"flex",justifyContent:"center"}}>
      <Card style={{ width: "50%",marginBottom:10,marginTop:10}}>

     
      <Steps>
    <Step status="finish" title="User" icon={<Icon type="user" />} />
    <Step status="finish" title="Approver" icon={<Icon type="solution" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
  </Steps>
      </Card>
      </div>
      <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
      <Panel key="1" header='รายละเอียด'>
        
      <Form>
        <FormGroup row>
          <Label for="docNo" sm={2}>เลขที่เอกสาร</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" disabled />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>วันที่</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>
          
        </FormGroup>
        <FormGroup row>
          <Label for="group" sm={2}>ผลิตภัณฑ์ที่ร่วมรายการ</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>ผู้ขออนุมัติ</Label>
          <Col sm={3}>
            <Input type="select" name="cost" id="exampleSelect" />
          </Col>
      
        </FormGroup>
        <FormGroup row>
          <Label for="plan" sm={2}>กิจกรรม</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
        <FormGroup row>
          <Label sm={2}>แผนงาน</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie"/>
          </Col>
          <Label sm={1}>แผนงานย่อย</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>ตัวแทนจำหน่าย</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>รายการ</Label>
          <Col sm={7}>
            <Input type="textarea" name="select" id="status" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>ประเภทรายการ</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="docNo" sm={2}>ระยะเวลาของรายการ</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>ถึง</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" />
          </Col>  
        </FormGroup>
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>รายการ</Label>
          <Col sm={7}>
            <Input type="textarea" name="select" id="status" />
          </Col>
        </FormGroup>
        <FormGroup check>
        <Col sm={12}>
        <Label sm={2}></Label>
        <Input type="checkbox" name="check" id="exampleCheck"/> 
        <Label >ส่งข้อมูลไปยัง E-Vocuher</Label>
        </Col>
        </FormGroup>
        <FormGroup check>
        <Col sm={12}>
        <Label sm={2}></Label>
        <Input type="checkbox" name="check" id="exampleCheck"/> 
        <Label >มีข้อตกลงทางการค้า</Label>
        </Col>
        </FormGroup>
        
      </Form>
      </Panel>
      <Panel  key="2" header='ร้านค้าร่วมรายการ'>
      <Tables2 />
      </Panel>
      <Panel  key="3" header='รายละเอียดค่าใช้จ่าย'>
      <Tables />
      </Panel>
      <Panel  key="4" header='เอกสารแนบ'>
        <Uploads></Uploads>
      </Panel>     
      
      </Collapse>
      
      <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
      <Button color="primary" style={{marginBottom:10}}>บันทึก</Button>{' '}
      <Button color="secondary" style={{marginBottom:10}}>ส่งอนุมัติ</Button>{' '}
      </div>
    );
  }
}