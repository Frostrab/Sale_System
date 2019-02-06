import React, { PureComponent } from 'react'
import NewTab from './NewTab.js'
import NewTab2 from './NewTab2.js'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card } from 'antd';
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;

const RadioGroup = Radio.Group;

const Step = Steps.Step;

function callback(key) {
  console.log(key);
}
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

export default class Newprop extends PureComponent {

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
      <div style={{marginBottom:20,backgroundColor:"#e6f7ff"}} >
      <div style={{display:"flex",justifyContent:"center"}}>
      <Card style={{ width: "50%",marginBottom:10,marginTop:10,}}>

     
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
          <Label for="cost" sm={2}>ผู้ขออนุมัติ</Label>
          <Col sm={3}>
            <Input type="select" name="cost" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="group" sm={2}>ร้านค้า</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        
        
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>ที่อยู่</Label>
          <Col sm={7}>
            <Input type="textarea" name="select" id="status" disabled />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>ผู้ติดต่อ</Label>
          <Col sm={7}>
            <Input type="text" name="select" id="status"  disabled />
          </Col>
        </FormGroup>  
        <FormGroup row>
          <Label  sm={2}>เบอร์ติดต่อ</Label>
          <Col sm={7}>
            <Input type="text" name="select" id="status"  disabled />
          </Col>
        </FormGroup>  
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>โครงการ</Label>
          <Col >
        <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>SH</Radio>
        <Radio value={2}>SE</Radio>
        <Radio value={3}>SN</Radio>
        <Radio value={4}>SO</Radio>
        </RadioGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>ระยะเวลาที่เริ่มต้น</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>
        <Label for="activitie" sm={1}>ระยะเวลาที่สิ้นสุด</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>  
          </FormGroup>  
          <FormGroup row>
          <Label for="cost" sm={2}>เงื่อนไขการจ่าย</Label>
          <Col sm={3}>
            <Input type="select" name="cost" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>ระยะเวลาโครงการ</Label>
          <Col sm={3}>
            <Input type="text" name="cost" id="exampleSelect"  disabled />
          </Col>
        <Label  sm={2}>เดือน</Label>
         
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>วัตถุประสงค์</Label>
          <Checkbox.Group style={{ width: '30%' }} onChange={onChange}>
            <Row >
                <Col span={8}><Checkbox value="A">1.เพื่อสร้างความสัมพันธุ์ที่ดีกับร้านค้า</Checkbox></Col>
                <Col span={8}><Checkbox value="B">2.เพื่อเพิ่มยอดขายสินค้า</Checkbox></Col>
                <Col span={8}><Checkbox value="C">3.เพื่อสกัดกั้นคู่แข่ง</Checkbox></Col>
                <Col span={8}><Checkbox value="D">4.เพื่อต่อระยะโครงการ</Checkbox></Col>
                
            </Row>
            </Checkbox.Group>
          </FormGroup>
          <FormGroup row>
          <Label sm={2}>เงื่อนไข</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>ผลิตภัณฑ์หลัก</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>ประมาณการยอดขาย</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  disabled/>
          </Col>
          <Label sm={2}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>งบประมาณสนับสนุนน</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  disabled/>
          </Col>
          <Label sm={2}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>% to Sale</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  disabled/>
          </Col>
          <Label sm={2}>%</Label>
        </FormGroup>
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>วิธีการ</Label>
          <Col sm={7}>
            <Input type="textarea" name="select" id="status" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>อ้างอิง Proposal</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
        </FormGroup>
        
        
        <Button color="secondary" sm={2}>กำหนดผลิตภัณฑ์</Button>{' '}
      </Form>
      

      </Panel>
      <Panel key='2' header='รายละเอียดค่าใช้จ่าย'>
      <NewTab2 />
      </Panel>
      <Panel key='3' header='เป้าหมาย'>
      <div style={{marginBottom:20}}>
      <Button color="secondary">ประมวลผล</Button>{' '}
      </div>
      <NewTab />
      </Panel>
      </Collapse>
      
      <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
      <Button color="primary" style={{marginBottom:10}}>บันทึก</Button>{' '}
      <Button color="secondary" style={{marginBottom:10}}>ส่งอนุมัติ</Button>{' '}
      </div>
    );
  }
}