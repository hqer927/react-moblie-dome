/**
 * Created by hqer on 2019/5/28.
 */
import './home.less';
import React from 'react';
import Swiper from 'react-mobile-swiper';
import {createHashHistory} from 'history';
const history = createHashHistory();

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showIndex:0
        };
        this.showIndex = 0;
    }
    render () {
        return (
            <div className='vaccine-home-page'>
                <Swiper height='auto' pagination={false} onSlideChange={this.onSlideEvent}>
                    <div className='item'>
                        <img src='./img/home-swiper-1.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='./img/home-swiper-2.jpg'/>
                    </div>
                    <div className='item'>
                        <img src='./img/home-swiper-3.jpg'/>
                    </div>
                </Swiper>
                <div className='transparent-btn' onTouchStart={this.goLogin}>跳过</div>
            </div>
        );
    }
    onSlideEvent = (_i) => {
        console.log(_i);
        if (this.showIndex === _i && _i === 2) {
            this.goLogin();
        } else {
            this.showIndex = _i;
        }
    }
    goLogin = () => {
        history.push('/vaccine/login');
    }
}
export default Home;
