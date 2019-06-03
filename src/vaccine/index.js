/**
 * Created by hqer on 2019/5/27.
 */
import './less/main.less';
import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import asyncComponent from '../AsyncComponent';
import { Provider } from 'mobx-react';
import Stores from './stores/index';

const Login = asyncComponent(() => import('./login'));
const smsLogin = asyncComponent(() => import('./smslogin'));
const Home = asyncComponent(() => import('./home'));
const Work = asyncComponent(() => import('./work/index'));
const HeaderPage = asyncComponent(() => import('./headerPage/index'));
class Index extends React.Component {
    render () {
        return (
            <Provider {...Stores}>
                <div className='app-box vaccine-app-bg'>
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={Home} />
                        <Route path={`${this.props.match.url}/work`} component={Work} />
                        <Route path={`${this.props.match.url}/header`} component={HeaderPage} />
                        <Route exact path={`${this.props.match.url}/login`} component={Login} />
                        <Route exact path={`${this.props.match.url}/smslogin`} component={smsLogin} />
                    </Switch>
                </div>
            </Provider>
        );
    }
}
export default Index;
