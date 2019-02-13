
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row, Icon, Steps, Card, } from 'antd';
import Budgetintable from './Budgetintable';
import Newbudgetin from './Newbudgetin';
import Showbudgetin from './Showbudgetin';
import Fixbudgetin from './Fixbudgetin';
import Deletebudgetin from './Deletebudgetin';

const RadioGroup = Radio.Group;

const Panel = Collapse.Panel;



function callback(key) {
    console.log(key);
  }

export default class Budgetin extends PureComponent {
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
            <h2>การโอนงบประมาณภายใน</h2>
        <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
        <Panel key="1" header='ค้นหาแผนงาน'>
        <Form>
        
        <FormGroup row>
        <Label sm={2}>ปี</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie"  />
            
          </Col>
        </FormGroup>
        
        </Form>
        <Button color="warning" style={{marginBottom:10}}>ค้นหา</Button>{' '}
        </Panel>
     
        </Collapse>
        
        <Button color="primary" style={{marginBottom:10}}>สร้างใหม่</Button>{' '}
        {/*<Budgetintable />
        <Newbudgetin />
        <Showbudgetin />
        <Fixbudgetin />
        <Deletebudgetin />*/}
        </div>
        
    );
  }
}

