import React, { PureComponent } from 'react'
import {
     Badge,
     Button,
     ButtonDropdown,
     ButtonGroup,
     ButtonToolbar,
     Card,
     CardBody,
     CardFooter,
     CardHeader,
     CardTitle,
     Col,
     Dropdown,
     DropdownItem,
     DropdownMenu,
     DropdownToggle,
     Progress,
     Row,
     Table,
   } from 'reactstrap';
export default class Years extends PureComponent {
     render(){
          return(
               <React.Fragment>
               <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 2018
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="34" />
                 <Progress className="progress-xs" color="danger" value="78" />
                 <Progress className="progress-xs" color="warning" value="10" />

               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 2017
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="56" />
                 <Progress className="progress-xs" color="danger" value="94" />
                 <Progress className="progress-xs" color="warning" value="15" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 2016
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="12" />
                 <Progress className="progress-xs" color="danger" value="67" />
                 <Progress className="progress-xs" color="warning" value="20" />
               </div>
             </div>
             <div className="legend text-center">
               <small>
                 <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                 Forecast	
                                         &nbsp;
                 <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                 Used
                 &nbsp;
                 <sup className="px-1"><Badge pill color="warning">&nbsp;</Badge></sup>
                 Balance
               </small>
             </div>
             </React.Fragment>
          )
     }
}