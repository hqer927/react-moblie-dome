/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import {createHashHistory} from 'history';
const history = createHashHistory();
import '../less/main.less';
import '../login.less';

@inject('Header')
@inject('BabyInfo')
class resetPwd extends React.Component {
    goConfirm = () => {
        this.props.BabyInfo.setStatus(0);
        history.replace('/vaccine/work/baby');
    };

    render () {
        return (
            <div className='vaccine-app-bg login-bg vaccine-app-forget'>
                <div className='info'>
                    <div className='title'>重 设 密 码</div>
                    <div className='tel-input'>
                        <div>新密码：</div>
                        <input placeholder='请输入新密码' type='password' className='form-control' maxLength='6'/>
                    </div>
                    <div className='promote'>密码由字母和数字组成，长度为6位字符，区分大小写</div>
                    <div className='code-input'>
                        <div>新密码确认：</div>
                        <input placeholder='请再次输入新密码' type='password' className='form-control' maxLength='6'/>
                    </div>
                    <div className='center'>
                        <div className='btn-submit' onTouchEnd={this.goConfirm}>确认</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default resetPwd;
