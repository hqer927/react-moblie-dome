/**
 * Created by hqer on 2019/5/28.
 */
import './headerBox.less';
import React, { Component ,Fragment } from 'react';
import { Route ,Switch} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import { Icon } from 'antd-mobile';
import asyncComponent from '../../AsyncComponent';
import { inject, observer } from 'mobx-react';
import {createHashHistory} from 'history';
const history = createHashHistory();
const forgetPwd = asyncComponent(() => import('./forgetPwd'));
const resetPwd = asyncComponent(() => import('./resetPwd'));

@inject('Header')
@observer
class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {show:false};
    }
    componentDidMount () {
        this.setState({show:true});
    }
    componentWillUnmount () {
        this.setState({show:false});
    }
    render () {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    classNames='header'
                    timeout={500}
                    unmountOnExit>
                    <div className='header'>
                        {this.props.Header.isShowBack ? (
                            <Icon type='left' onTouchStart={this.goBack}/>
                        ) : null}
                        {this.props.Header.title}
                    </div>
                </CSSTransition>
                <div className='vaccine-app-header-box'>
                    <Switch>
                        <Route exact path={`${this.props.match.url}/forgetPwd`} component={forgetPwd} />
                        <Route exact path={`${this.props.match.url}/resetPwd`} component={resetPwd} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
    goBack = () => {
        history.go(-1);
    }
}
export default Index;
