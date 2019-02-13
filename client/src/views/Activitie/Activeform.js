
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Input, } from 'antd';
import { Col, Form, FormGroup, Label, } from 'reactstrap';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Activeform extends PureComponent {
    render(){
        return(

        <div>
  <Collapse defaultActiveKey={['1']} onChange={callback} >
    
    <Panel header="รายละเอียด" key="1">
      <Form>
      <FormGroup row>
            <Label sm={2}>รหัสกิจกรรม</Label>
            <Col sm={5}>
            <Input type="text" disabled />
            </Col>
      </FormGroup>
      <FormGroup row>
            <Label sm={2}>กิจกรรม</Label>
            <Col sm={5}>
            <Input type="text" />
            </Col>
      </FormGroup>
      <FormGroup row>
            <Label sm={2}>รายละเอียดกิจกรรม</Label>
            <Col sm={5}>
            <Input type="textarea" />
            </Col>
      </FormGroup>
      </Form>
    </Panel>
    
  </Collapse>
  </div>
);
}
}
          