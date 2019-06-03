/**
 * Created by hqer on 2019/5/28.
 */
import './work.less';
import React, { Component, Fragment } from 'react';
import { Route ,Switch,Link,Redirect} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd-mobile';
import {createHashHistory} from 'history';
const history = createHashHistory();

import asyncComponent from '../../AsyncComponent';
const Baby = asyncComponent(() => import('./babyIndex'));
const Mom = asyncComponent(() => import('./momClass'));
const Appoint = asyncComponent(() => import('./appoint'));
const Vaccination = asyncComponent(() => import('./vaccination'));
const SetInjectionPlan = asyncComponent(() => import('./setInjectionPlan'));
const ModifyInjectionLoc = asyncComponent(() => import('./modifyInjectionLoc'));
const Details = asyncComponent(() => import('./details'));
const BabyBirth = asyncComponent(() => import('./babyBirth'));
const CitySelect = asyncComponent(() => import('./citySelect'));

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
    goBack = () => {
        history.go(-1);
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
                <div className='vaccine-app-work'>
                    <Switch>
                        <Route exact path={this.props.match.url} render={() => (<Redirect to={`${this.props.match.url}/baby`}/>)}/>
                        <Route exact path={`${this.props.match.url}/baby`} component={Baby} />
                        <Route exact path={`${this.props.match.url}/mom`} component={Mom} />
                        <Route exact path={`${this.props.match.url}/city`} component={CitySelect} />
                        <Route exact path={`${this.props.match.url}/appoint`} component={Appoint} />
                        <Route exact path={`${this.props.match.url}/birth`} component={BabyBirth} />
                        <Route exact path={`${this.props.match.url}/injection`} component={SetInjectionPlan} />
                        <Route exact path={`${this.props.match.url}/modifyLoc/:id`} component={ModifyInjectionLoc} />
                        <Route exact path={`${this.props.match.url}/details/:id`} component={Details} />
                        <Route exact path={`${this.props.match.url}/vaccination`} component={Vaccination} />
                    </Switch>
                </div>
                <CSSTransition
                    in={this.state.show}
                    classNames='footer'
                    timeout={500}
                    unmountOnExit>
                    <ul className='footer'>
                        <li>
                            <Link to={`${this.props.match.url}/baby`} className={this.props.Header.router === 'baby' ? 'select' : ''}>
                                <div className='icon-img clover'></div>
                                <span>首页</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/mom`} className={this.props.Header.router === 'mom' ? 'select' : ''}>
                                <div className='icon-img hat'></div>
                                <span>妈妈课堂</span>
                            </Link>
                        </li>
                    </ul>
                </CSSTransition>
            </Fragment>
        );
    }
}
export default Index;
