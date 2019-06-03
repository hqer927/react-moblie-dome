import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter ,Route ,Switch ,Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import asyncComponent from './AsyncComponent';

const Vaccine = asyncComponent(() => import('./vaccine/index'));

(function () {
    const setRem = () => {
        const vw = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = `${vw / 7.5}px`;
    };
    setRem();
    window.onresize = setRem;
}());

ReactDOM.render(
    <HashRouter>
        <div className='app-page'>
            <Switch>
                <Route exact path='/' render={() => (<Redirect to='/vaccine'/>)}/>
                <Route path='/vaccine' component={Vaccine}/>
            </Switch>
        </div>
    </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
