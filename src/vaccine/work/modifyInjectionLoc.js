/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { Picker,List,Button,Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './district.less';
import Config from './config-district';
import {createHashHistory} from 'history';
import { inject, observer } from 'mobx-react';
const history = createHashHistory();
@inject('Header')
@inject('BabyInfo')
@observer
class ModifyInjectionLoc extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            district:["330000", "330100", "330106"],
            vaccinatePoint:''
        };
    }
    componentWillMount () {
        this.props.Header.setInfo({title:'接种单位修改',isShowBack:true,router:'baby'});
    }
    submit = () => {
        let isOk = true;
        if (!this.state.district) {
            isOk = false;
            Toast.info('请点击选择接种地区 !!!', 1);
        }
        if (!this.state.vaccinatePoint) {
            isOk = false;
            Toast.info('请点击选择接种点 !!!', 1);
        }
        if (isOk) {
            history.go(-1);
        }
    }
    render () {
        return (
            <div className='vaccine-app-district'>
                <div className='row-wrapper'>当前接种地址：<span>浙江省余杭区五常街道社区医院</span></div>
                <div className='row-wrapper'>
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker extra="点击选择接种地址"
                            title="地区选择"
                            value={this.state.district}
                            data={Config.district}
                            onChange={v => this.setState({ district: v, vaccinatePoint: ''})}
                            onOk={e => console.log('ok', e)}
                            onDismiss={e => console.log('dismiss', e)}
                        >
                            <List.Item arrow="down" className="picker-list-item"></List.Item>
                        </Picker>
                    </List>
                 </div>
                <div className='row-wrapper'>
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker extra="点击选择接种点"
                                title="接种点选择"
                                value={this.state.vaccinatePoint}
                                itemStyle={{fontSize:"20px",lineHeight:"30px",height:'30px',color:'#333'}}
                                indicatorStyle={{fontSize:"20px",lineHeight:"30px",height:'30px'}}
                                data={Config.vacciatePoint[this.state.district.toString().charAt(this.state.district.toString().length - 1)%2]}
                                cols={1}
                                onChange={v => this.setState({ vaccinatePoint: v })}
                                onOk={e => console.log('ok', e)}
                                onDismiss={e => console.log('dismiss', e)}
                        >
                            <List.Item arrow="down" className="picker-list-item"></List.Item>
                        </Picker>
                    </List>
                </div>
                 <div className='row-wrapper' style={{marginTop:60}}>
                    <Button className="submit-btn" onClick={this.submit}>确定</Button>
                 </div>
            </div>
        );
    }
}
export default ModifyInjectionLoc;