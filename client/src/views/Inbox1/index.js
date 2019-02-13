import React, {PureComponent} from 'react'
import Tablelist from './Tablelist';

import 'antd/dist/antd.css';
import { Table, Input, Button, Form, Card, } from 'antd';
import Row1 from './Row1';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                <Card title="Inbox">
                <Tablelist />
                </Card>
            </div>
        )
    }
}