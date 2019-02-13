import React, { PureComponent } from 'react'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Tablereport from './Tablereport';
import History from './History';
import Historyshow from './Historyshow';
import Showcost from './Showcost';
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
        <Tablereport  visible={this.state.visible1} />
        
        </div>
      );
}
}  
    