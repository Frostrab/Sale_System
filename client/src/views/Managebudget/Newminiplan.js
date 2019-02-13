import React, { PureComponent } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Collapse, DatePicker, Icon, Steps, Card, Table } from 'antd';
import 'antd/dist/antd.css';
import Managebudgetform from './Managebudgetform';


export default class Newminiplan extends PureComponent {

  render() {
    return (
      <div style={{marginBottom:20}} >
      <h2>สร้างแผนงานย่อย</h2>
      <Managebudgetform />
      
      <Button color="warning" style={{marginBottom:10}}>ย้อนกลับ</Button>{' '}
        </div>
    );
  }
}