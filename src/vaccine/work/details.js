import React from 'react';
import './note.less';
import Config from './config-note';
import { inject, observer } from 'mobx-react';
@inject('Header')
@observer
class Details extends React.Component {
    componentWillMount () {
        this.props.Header.setInfo({title:'疫苗详情',isShowBack:true,router:'baby'});
    }
    render () {
        const id = this.props.match.params.id;
        return (
            <div className='vaccine-app-details'>
                <div className='row-wrapper'>
                    <div className='row-title'>{Config.vaccination[id].title}</div>
                    <div className='sub-title'><div className='row-mark'></div>接种原因：</div>
                    <div className='row-content'>{Config.vaccination[id].reason}</div>
                    <div className='sub-title'><div className='row-mark'></div>接种原理：</div>
                    <div className='row-content'>{Config.vaccination[id].principle}</div>
                    <div className='sub-title'><div className='row-mark'></div>接种方法：</div>
                    <div className='row-content'>{Config.vaccination[id].method}</div>
                </div>
            </div>
        )
    }
}
export default Details;