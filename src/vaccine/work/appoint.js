/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import {createHashHistory} from 'history';
import Config from './config-babyInfo';
const history = createHashHistory();

@inject('Header')
@inject('BabyInfo')
@observer
class Appoint extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list:[
                {t:'上午',n:'1号',v:'01'},
                {t:'上午',n:'2号',v:'02'},
                {t:'上午',n:'3号',v:'03'},
                {t:'下午',n:'1号',v:'04'},
                {t:'下午',n:'2号',v:'05'},
                {t:'下午',n:'3号',v:'06'}
            ],
            select:''
        };
    }
    componentWillMount  () {
        this.props.Header.setInfo({title:'预约',isShowBack:true,router:'baby'});
    }
    postData = () => {
        this.props.BabyInfo.setInfo({status:3});
        history.go(-1);
    }
    selectItem (_v) {
        this.setState({select:_v});
    }
    render () {
        return (
            <div className='vaccine-app-work-appoint'>
                <div className='zone'>
                    <div className='text line-box'>接种单位：{Config[this.props.BabyInfo.id].units}<Link to='/vaccine/work/injection'><span className='icon-edit'></span></Link></div>
                    <div className='text'>接种日期：{Config[this.props.BabyInfo.id].date}<Link to='/vaccine/work/vaccination'><span className='icon-edit'></span></Link></div>
                    <ul className='appoint-list'>
                        {
                            this.state.list.map((item,i) => (
                                <li key={i} onTouchStart={this.selectItem.bind(this,item.v)} className={item.v === this.state.select ? 'select' : ''}>
                                    <span>{item.t}</span>
                                    <span>{item.n}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='center'>
                        <div className='btn-submit' onClick={this.postData}>确认预约</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Appoint;
