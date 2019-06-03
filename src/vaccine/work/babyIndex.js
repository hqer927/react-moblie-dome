/**
 * Created by hqer on 2019/5/28.
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Config from './config-babyInfo';

@inject('Header')
@inject('BabyInfo')
@observer
class Baby extends Component {
    componentWillMount  () {
        this.props.Header.setInfo({title:'疫苗接种',isShowBack:false,router:'baby'});
    }
    render () {
        console.log(this.props.BabyInfo.status);
        return (
            <div className='vaccine-app-work-baby-index'>
                {
                    this.props.BabyInfo.status === 0 ? (
                        <div className='empty'>
                            <Link to='/vaccine/work/city'>添加宝宝</Link>
                        </div>
                    ) : (
                        <div className='zone'>
                            <div className='line-box padding-top-0'>
                                <img className='img' src={Config[this.props.BabyInfo.id].img}/>
                                <div className='inline-block title'>
                                    <div className='name'>{this.props.BabyInfo.name}</div>
                                    <div className='subTitle'>我已经出生<font color='#06cc7e'>66</font>天啦</div>
                                </div>
                            </div>
                            <div className='line-box'>
                                <div>接种单位：{Config[this.props.BabyInfo.id].units}<Link to={'/vaccine/work/modifyLoc/'+this.props.BabyInfo.id} ><span className='icon-edit'></span></Link></div>
                                <div>接种本<Link to='/vaccine/work/vaccination' ><span className='icon-edit'></span></Link><span>（{this.props.BabyInfo.name}，最近要接种<font color='#06cc7e'>{this.props.BabyInfo.nextVaccination}</font>哦~）</span></div>
                            </div>
                            {
                                this.props.BabyInfo.status === 1 ? (
                                    <div className='line-box no-border'>
                                        <div>下一针接种计划：<Link className='btn-submit' to='/vaccine/work/injection'>去设置</Link></div>
                                    </div>
                                ) : (
                                    <Fragment>
                                        <div className='line-box no-border'>
                                            <div>下一针接种计划：</div>
                                            <div className='date'>2019-5-23  周四 <Link to='/vaccine/work/injection' ><span className='icon-edit'></span></Link></div>
                                            <div>卡介苗（免费）</div>
                                            {
                                                this.props.BabyInfo.status === 2 ? (
                                                    <div className='center'>
                                                        <Link className='btn-submit' to='/vaccine/work/appoint' >预约</Link>
                                                    </div>
                                                ) : (
                                                    <div className='appoint'>
                                                        <span>已预约</span>
                                                        <span>xxxx接种点</span>
                                                        <span>2019-5-23（周四）</span>
                                                        <span>上午2号</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Fragment>
                                )
                            }

                        </div>
                    )
                }
            </div>
        );
    }
}
export default Baby;
