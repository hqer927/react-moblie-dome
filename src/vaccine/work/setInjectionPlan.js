/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { DatePicker, Checkbox, Radio, Button, TextareaItem,InputItem,Toast,List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './plan.less';
import { inject, observer } from 'mobx-react';
import Config from './config-district';
import {createHashHistory} from 'history';
const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const history = createHashHistory();
@inject('Header')
@inject('BabyInfo')
@observer
class SetInjectionPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 接种时间
            time: '',
            // 接种疫苗
            vaccine:[],
            // 添加短信提醒与否
            isAddSms:false,
            // 手机号
            phone:'',
            // 手机格式错误
            hasPhoneError:false,
            smsMode:0
        };
    }
    componentWillMount  () {
        this.props.Header.setInfo({title:'设置接种计划',isShowBack:true,router:'baby'});
    }
    onChangeVacci = (e,i) => {
        const vaccine = JSON.parse(JSON.stringify(this.state.vaccine));
        if (e.target.checked) {
            vaccine.push(i.value);
        } else {
            let index = vaccine.length;
            while (index--) {
                if (this[index] == i.value) {
                    return index;
                }
            }
            vaccine.splice(index,1);
        }
        this.setState({
            vaccine:vaccine
        });
    }
    onChangeSms = (val) => {
        console.log(val);
    };
    changeAddSms = (val) => {
        this.setState({
            isAddSms:val.target.checked
        });
    }
    onErrorPhoneClick = () => {
        if (this.state.hasPhoneError) {
            Toast.info('请输入11位手机号 !!!');
        }
    }
    onPhoneChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasPhoneError: true,
            });
        } else {
            this.setState({
                hasPhoneError: false,
            });
        }
        this.setState({
            phone:value
        });
    }
    submit = () => {
        let isOk = true;
        // 接种时间
        if (!this.state.time) {
            Toast.info('请选择下次接种时间 !!!');
            isOk = false;
            return;
        }
        // 接种疫苗
        if (!this.state.vaccine.length) {
            Toast.info('请选择下次接种疫苗 !!!');
            isOk = false;
            return;
        }
        if (this.state.isAddSms) {
            if(!this.state.phone) {
                Toast.info('请输入手机号 !!!');
                isOk = false;
                return;
            }
        }
        if (isOk) {
            this.props.BabyInfo.setStatus(2);
            history.go(-1);
        }
    }
    render () {
        const now = new Date();
        return (
            <div className='vaccine-app-plan'>
                <div className='row-wrapper first'>
                    接种疫苗请参考纸质接种本
                </div>
                <div className='row-wrapper second'>
                    <div className='title'>
                        下次接种时间:
                    </div>
                    <div className='input-wrapper'>
                        <DatePicker
                            mode='date'
                            title='选择日期'
                            extra='请选择下次接种时间'
                            value={this.state.time}
                            onChange={date => this.setState({ time:date })}
                        >
                            <List.Item className="picker-list-item"><div className='icon_calendar'></div></List.Item>
                        </DatePicker>
                    </div>
                </div>
                <div className='row-wrapper'>
                    <div className='title'>
                        下次接种疫苗:
                    </div>
                    <div className='vaccine-wrapper'>
                        {Config.vaccine.map(i => (
                            <CheckboxItem key={i.value} onChange={(e) => this.onChangeVacci(e,i)}>
                                {i.label}
                            </CheckboxItem>
                        ))}
                    </div>
                </div>
                <div className='row-wrapper'>
                    <Checkbox className="addSMS-radio" checked={this.state.isAddSms} onChange={this.changeAddSms}>添加短信提醒</Checkbox>
                    {
                        this.state.isAddSms ? (
                            <div>
                                <InputItem
                                    className='phone-input'
                                    value={this.state.phone}
                                    type="phone"
                                    error={this.state.hasPhoneError}
                                    onErrorClick={this.onErrorPhoneClick}
                                    onChange={this.onPhoneChange}
                                    placeholder="请输入手机号"
                                ></InputItem>
                                <div className='sms-wrapper'>
                                    {Config.smsMode.map(i => (
                                        <CheckboxItem key={i.value} onChange={() => this.onChangeSms(i.value)}>
                                            {i.label}
                                        </CheckboxItem>
                                    ))}
                                </div>
                                <TextareaItem
                                    className='sms-content'
                                    placeholder='请输入提醒短信内容'
                                    rows={5}
                                    count={70}
                                />
                            </div>
                        ):''
                    }
                </div>
                <div className='row-wrapper last'>
                    <Button className="submit-btn" onClick={this.submit}>确定</Button>
                </div>
            </div>
        );
    }
}
export default SetInjectionPlan;
