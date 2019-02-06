import React, { Component,Fragment } from 'react'
import Moment from 'moment'
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker } from 'antd';


function onChange(date, dateString) {
  console.log(date, dateString);
}
class MomentExample extends Component {
render(){
   
    Moment.locale('th') //For Turkey
    
    return(<Fragment> 
        {/* {formattedDT}  */}
        <DatePicker onChange={onChange} />
        </Fragment>)
}
}
export default MomentExample;