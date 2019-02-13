import React ,{PureComponent} from 'react'
import Rateform from './Rateform';
import MDrate1 from './MDrate1';
import EMPrate1 from './EMPrate1';
export default class index extends PureComponent {


     render() {
          return(
               <div>
                   <Rateform />

                   
                   <EMPrate1 />

                   <MDrate1 />

              </div>
          )
     }
}