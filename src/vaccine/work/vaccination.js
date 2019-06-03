/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { Modal,DatePicker,Checkbox,List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './note.less';
import Config from './config-note';
const alert = Modal.alert;
@inject('Header')
@observer
class Vaccination extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount () {
        this.props.Header.setInfo({title:'接种本',isShowBack:true,router:'baby'});
    }
    showModal =(item,subItem) => {
        alert(
            item.age + '（' + subItem.label + '）',
            <div className="modal-wrapper">
                <div className='modal-row'>
                    <div className='modal-title'>修改时间：</div>
                    <DatePicker
                        className='modal-date-picker'
                        value={new Date(subItem.date.split('.').join('-'))}
                        mode='date'
                        title='选择日期'
                        onChange={date => console.log(date.toLocaleString())}
                    >
                        <List.Item className="modal-picker-list-item"></List.Item>
                    </DatePicker>
                </div>
                <div className='modal-row'>
                    <Checkbox className="modal-checkbox">已接种</Checkbox>
                </div>
            </div>,
            [
                { text: '取消' },
                { text: '提交' },
            ]
        )
    }
    render () {
        return (
            <div className='vaccine-app-note'>
                <div className='row-wrapper-first'>
                    参考纸质接种本修正接种记录
                </div>
                {
                    Config.vaccinateNote.map((item,i) => (
                        <div className='row-wrapper' key={i}>
                            <div className='row-title'>{item.age}</div>
                            {
                                item.data.map((subItem,j) => (
                                    <div className='row-item' key={j}>
                                        <div className='item-wrapper'>
                                            <div className='item-title'>
                                                <Link to={'/vaccine/work/details/'+subItem.id}>{subItem.label}</Link>
                                            </div>
                                            <div className='item-stage'>{subItem.stage}</div>
                                            <div className='item-icon'>
                                                <span className='icon-edit' onClick={this.showModal.bind(this,item,subItem)}></span>
                                            </div>
                                        </div>
                                        <div className='item-time'>{subItem.date}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Vaccination;
