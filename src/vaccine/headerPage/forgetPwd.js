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

class forgetPwd extends React.Component {
    goNext = () => {
        history.replace('/vaccine/header/resetPwd');
    };

    render () {
        return (
            <div className='vaccine-app-bg login-bg vaccine-app-forget'>
                <div className='info'>
                    <div className='title'>忘 记 密 码</div>
                    <div className='tel-input'>
                        <div>手机号码：</div>
                        <input placeholder='请输入手机号码' className='form-control'/>
                    </div>
                    <div className='code-input'>
                        <div>验证码：</div>
                        <input placeholder='请输入验证码' className='form-control verify-code'/>
                        <div className='form-control verify-btn'>获取验证码</div>
                    </div>
                    <div className='center'>
                        <div className='btn-submit' onTouchStart={this.goNext}>下一步</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default forgetPwd;
