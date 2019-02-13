import React, { PureComponent } from 'react'
import {
     Badge,
     Progress,
   } from 'reactstrap';
export default class Mount extends PureComponent {
     render(){
          return(
               <React.Fragment>
               <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 JAN
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
                 FEB
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
                 MAR
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="12" />
                 <Progress className="progress-xs" color="danger" value="67" />
                 <Progress className="progress-xs" color="warning" value="20" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 APR
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="43" />
                 <Progress className="progress-xs" color="danger" value="91" />
                 <Progress className="progress-xs" color="warning" value="25" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 MAY
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="22" />
                 <Progress className="progress-xs" color="danger" value="73" />
                 <Progress className="progress-xs" color="warning" value="30" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 JUN
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="53" />
                 <Progress className="progress-xs" color="danger" value="82" />
                 <Progress className="progress-xs" color="warning" value="35" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 JUL
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="10" />
                 <Progress className="progress-xs" color="danger" value="20" />
                 <Progress className="progress-xs" color="warning" value="30" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 AUG
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="9" />
                 <Progress className="progress-xs" color="danger" value="69" />
                 <Progress className="progress-xs" color="warning" value="40" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 SEP
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="92" />
                 <Progress className="progress-xs" color="danger" value="30" />
                 <Progress className="progress-xs" color="warning" value="60" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 OCT
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="93" />
                 <Progress className="progress-xs" color="danger" value="49" />
                 <Progress className="progress-xs" color="warning" value="45" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 NOV
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="29" />
                 <Progress className="progress-xs" color="danger" value="39" />
                 <Progress className="progress-xs" color="warning" value="50" />
               </div>
             </div>
             <div className="progress-group mb-4">
               <div className="progress-group-prepend">
                 <span className="progress-group-text">
                 DEC
                 </span>
               </div>
               <div className="progress-group-bars">
                 <Progress className="progress-xs" color="info" value="19" />
                 <Progress className="progress-xs" color="danger" value="29" />
                 <Progress className="progress-xs" color="warning" value="49" />
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