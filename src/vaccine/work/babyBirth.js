/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { DatePicker, Picker, List } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import {createHashHistory} from 'history';
const history = createHashHistory();
import 'antd-mobile/dist/antd-mobile.css';
import '../less/main.less'
import './info.less'

@inject('Header')
@inject('BabyInfo')
@observer
class BabyBirth extends React.Component {
    nowTimeStamp = Date.now();

    state = {
        maxDate: new Date(this.nowTimeStamp),
        date: null,
        pot: []
    };

    district = [
        {label: '安儿医院',value:'111'},
        {label: '贴心医院',value:'222'}
    ]

    goAddBaby = () => {
        this.props.BabyInfo.setStatus(1);
        history.go(-1);
    };

    componentWillMount  () {
        this.props.Header.setInfo({title:'宝宝相关信息',isShowBack: true, router:'baby'});
    }

    render () {
        return (
            <div className='vaccine-app-info vaccine-app-bg'>
                <div>
                    <List className='date-picker-list'>
                        <div className='info-label'>宝宝生日：</div>
                        <div className='info-content'>
                            <DatePicker
                                mode='date'
                                title='选择日期'
                                extra='点击选择宝宝生日'
                                maxDate={this.state.maxDate}
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                            >
                            <List.Item arrow='horizontal'></List.Item>
                            </DatePicker>
                        </div>
                    </List>
                </div>
                <div className='date-picker-list'>
                    <div className='info-label'>宝宝姓名：</div>
                    <div className='info-content'>
                        <input className='info-input' maxLength='10' placeholder='请输入宝宝姓名' />
                    </div>
                </div>
                <div>
                    <List className='date-picker-list'>
                        <div className='info-label'>接种点：</div>
                        <div className='info-content'>
                            <Picker
                                data={this.district}
                                extra='点击选择宝宝接种点'
                                cols={1}
                                className='forss'
                                value={this.state.pot}
                                onChange={pot => this.setState({ pot })}
                            >
                            <List.Item arrow='horizontal'></List.Item>
                        </Picker>
                        </div>
                    </List>
                </div>
                <div className='date-picker-list'>
                    <div className='info-label'>宝宝性别：</div>
                    <div className='info-content ml-20'>
                        <input type='radio' name='item' id='radio_1' value='' defaultChecked/>
                        <label className='item' htmlFor='radio_1'>男孩</label>
                        <input type='radio' name='item' id='radio_2' value=''/>
                        <label className='item' htmlFor='radio_2'>女孩</label>
                    </div>
                </div>
                <div className='center'>
                    <div className='btn-submit' onTouchStart={this.goAddBaby}>添加宝宝</div>
                </div>
            </div>
        );
    }
}
export default BabyBirth;
