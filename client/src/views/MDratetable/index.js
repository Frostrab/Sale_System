

import React ,{PureComponent} from 'react'
import { Modal, Button, } from 'antd';
import List2 from './List2';
import MDtable from './MDtable'
export default class index extends PureComponent {

state = { visible: false,
          title1:"รายชื่อผู้รับการประเมิณ" 
          }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

     render() {
          return(
               <div>
                    {/* <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
        style={{marginLeft:"20%"}}
          width="70%"
          title={this.state.title1}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        > */}
        <MDtable />
        {/* </Modal> */}

                    
              </div>
          )
     }
}