
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
const RadioGroup = Radio.Group;

const Panel = Collapse.Panel;



function callback(key) {
    console.log(key);
  }

export default class Budgetinform extends PureComponent {
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
        <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
        <Panel key="1" header='รายละเอียด'>
        <Form>
        
        <FormGroup row>
        <Label sm={2}>ปี</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>ผู้อนุมัติ</Label>
          <Col sm={3}>
          <Input type="select" name="activitie" id="activitie"  />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>หมายเหตุ</Label>
          <Col sm={3}>
          <Input type="textarea" name="activitie" id="activitie"  />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={5}>จาก</Label>
          
          <Label for="plan" sm={1}>ไป</Label>
          

        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>กิจกรรม</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>กิจกรรม</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>

        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>แผนงาน</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>แผนงาน</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>

        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>แผนงานย่อย</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>แผนงานย่อย</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>

        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>หน่วยงาน</Label>
          <Col sm={3}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>หน่วยงาน</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
          <FormGroup row>
        <Label for="activitie" sm={2}>ศูนย์ต้นทุน</Label>
          <Col sm={3}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>ศูนย์ต้นทุน</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
          <FormGroup row>
        <Label for="activitie" sm={2}>IO</Label>
          <Col sm={3}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>IO</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>

        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>สถานะ</Label>
          <Col sm={3}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label for="plan" sm={1}>สถานะ</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 1</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 1</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 2</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 2</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 3</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 3</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 4</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 4</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 5</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 5</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 6</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 6</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 7</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 7</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 8</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 8</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 9</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 9</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 10</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 10</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 11</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 11</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
        <Label sm={2}>เดือน 12</Label>
          <Col sm={2}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        <Label sm={1}>บาท</Label>
          <Label for="plan" sm={1}>เดือน 12</Label>
          <Col sm={2}>
          <Input type="text" name="activitie" id="activitie" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        
        </Form>
        </Panel>
     
        </Collapse>
        </div>
        
    );
  }
}

