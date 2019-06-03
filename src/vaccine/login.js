/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import {createHashHistory} from 'history';
const history = createHashHistory();
import './less/main.less';
import './login.less';

@inject('BabyInfo')
class Login extends React.Component {
    goAddBaby = () => {
        history.replace('/vaccine/work');
    };

    goSmsLogin= () => {
        history.replace('/vaccine/smslogin');
    };

    goForgetPwd= () => {
        history.replace('/vaccine/header/forgetPwd');
    };

    render () {
        return (
            <div className='vaccine-app-bg login-bg first-login'>
                <div className='info'>
                    <img src='./img/title.png' className='system-name'/>
                    <div className='tel-input'>
                        <div>手机号码：</div>
                        <input placeholder='请输入手机号码' className='form-control'/>
                    </div>
                    <div className='code-input'>
                        <div>密码：</div>
                        <input placeholder='请输入密码' type='password' className='form-control'/>
                    </div>
                    <div className='login-way'>
                        <div onTouchStart={this.goSmsLogin}>手机验证码登录</div>
                        <div onTouchStart={this.goForgetPwd}>忘记密码</div>
                    </div>
                    <div className='center'>
                        <div className='btn-submit' onTouchStart={this.goAddBaby}>登录</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
