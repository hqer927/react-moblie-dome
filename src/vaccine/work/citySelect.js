/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { Picker,List,Button,Toast } from 'antd-mobile';import 'antd-mobile/dist/antd-mobile.css';
import Config from './config-district';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {createHashHistory} from 'history';
const history = createHashHistory();

import './info.less'

@inject('Header')
@inject('BabyInfo')
@observer
class Vaccination extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            district:[]
        };
    }

    componentWillMount  () {
        this.props.Header.setInfo({title:'选择接种点所在地',isShowBack: true, router:'baby'});
    }
    render () {
        return (
            <div className='vaccine-app-info vaccine-app-bg vaccine-app-city'>
                <div>
                    <List className="date-picker-list">
                        <div className='info-content'>
                        <Picker extra="点击选择接种所在地"
                                value={this.state.district}
                                data={Config.district}
                                onChange={v => this.setState({ district: v})}
                        >
                            <List.Item arrow="down" className="picker-list-item"></List.Item>
                        </Picker>
                            </div>
                    </List>
                </div>
                <div className='center'>
                    <Link className="btn-submit" to='/vaccine/work/birth' replace>确定</Link>
                </div>
            </div>
        );
    }
}
export default Vaccination;
