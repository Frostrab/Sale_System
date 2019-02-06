import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

import 'antd/dist/antd.css';
import { Modal } from 'antd';
import Tableshow2 from '../Tableshow2/Tableshow2';

import Qur from './Qur';
import Years from './Years';
import Mounths from './Mount';


const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}




class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      showContent:1,
    };
  }

  onHandleClick1 = ()=>{
    this.setState({showContent:1})
    console.log("test")
  }
  onHandleClick2 = ()=> {
    this.setState({showContent:2})
  }
  onHandleClick3 = () => {
    this.setState({showContent:3})
  }
  renderSwitch(param) {
    switch(param) {
      case 1:
        return <Mounths />
        case 2:
        return <Qur />
      default:
        return <Years />;
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  state = { visible1: false ,visible2: false,visible3: false}

  showModal1 = () => {
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

  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  }

  handleOk2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }

  showModal3 = () => {
    this.setState({
      visible3: true,
    });
  }

  handleOk3 = (e) => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  }

  handleCancel3 = (e) => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-info" style={{cursor:"pointer"}} onClick={this.showModal1} >
              <CardBody className="pb-0">
              
                <div className="text-value">9,123</div>
                <div>รายเดือน</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary" style={{cursor:"pointer"}} onClick={this.showModal2}>
              <CardBody className="pb-0">
               
                <div className="text-value">22,643</div>
                <div>รายไตรมาส</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-warning" style={{cursor:"pointer"}}  onClick={this.showModal3}>
              <CardBody className="pb-0">
               
                <div className="text-value">22,643</div>
                <div>รายปี</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        


        <Row>
          <Col>
            <Card>
              <CardHeader>
              สรุปงบแผนงานเทียบรายเดือน               
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="4">
                        <div className="callout callout-info"  style={{cursor:"pointer"}} onClick={this.onHandleClick1}>
                          <small className="text-muted">รายเดือน</small>
                          <br />
                          <strong className="h4">9,123</strong>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="callout callout-danger" style={{cursor:"pointer"}} onClick={this.onHandleClick2}>
                          <small className="text-muted">รายไตรมาส</small>
                          <br />
                          <strong className="h4">22,643</strong>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="callout callout-danger" style={{cursor:"pointer"}} onClick={this.onHandleClick3}>
                          <small className="text-muted">รายปี</small>
                          <br />
                          <strong className="h4">22,643</strong>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                  {
                    this.renderSwitch(this.state.showContent)
                  }
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                       
                      </Col>
                    </Row>
                    <ul>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon"></i>
                          <span className="title">กรุงเทพและปริมณฑล</span>
                          <span className="ml-auto font-weight-bold">63%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="43" />
                        </div>
                      </div>
                      <div className="progress-group mb-5">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon"></i>
                          <span className="title">จังหวัดอื่นๆ</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="37" />
                        </div>
                      </div>
                      
                    </ul>
                  </Col>
                </Row>
                <br />
              
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal width={900} style={{left:60}}
          footer={null}
          title="รายเดือน"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
        <Tableshow2 />
        </Modal>
        <Modal width={900} style={{left:60}}
          footer={null}
          title="รายไตรมาส"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
        <Tableshow2 />
        </Modal>
        <Modal width={900} style={{left:60}}
          footer={null}
          title="รายปี"
          visible={this.state.visible3}
          onOk={this.handleOk3}
          onCancel={this.handleCancel3}
        >
        <Tableshow2 />
        </Modal>

      </div>
    );
  }
}

export default Dashboard;