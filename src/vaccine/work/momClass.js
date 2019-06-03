/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
import Swiper from 'react-mobile-swiper';
@inject('Header')
@observer
class Mom extends React.Component {
    componentWillMount  () {
        this.props.Header.setInfo({title:'妈妈课堂',isShowBack:false,router:'mom'});
    }
    render () {
        return (
            <div className='vaccine-app-work-mom-list'>
                <Swiper loop={true} height='auto'>
                    <div><img src='./img/mom-swiper-1.jpg'/></div>
                    <div><img src='./img/mom-swiper-1.jpg'/></div>
                    <div><img src='./img/mom-swiper-1.jpg'/></div>
                </Swiper>
                <ul className='class-list'>
                    <li className='zone'>
                        <div className='title'>宝宝红屁屁难退，尿不湿：这个锅我不背！</div>
                        <div className='subTitle'>2019-05-22</div>
                        <div className='more'>>></div>
                    </li>
                    <li className='zone'>
                        <div className='title'>宝宝手上长倒刺，就是缺微量元素？</div>
                        <div className='subTitle'>2019-05-22</div>
                        <div className='more'>>></div>
                    </li>
                    <li className='zone'>
                        <div className='title'>孩子被打，要不要教他“打回去”？</div>
                        <div className='subTitle'>2019-05-22</div>
                        <div className='more'>>></div>
                    </li>
                    <li className='zone'>
                        <div className='title'>孩子频繁眨眼、揉眼睛，有可能得了这种病！</div>
                        <div className='subTitle'>2019-05-22</div>
                        <div className='more'>>></div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Mom;

