/**
 * Created by hqer on 2019/5/28.
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
@inject('Header')
@observer
class Appoint extends React.Component {
    componentWillMount  () {
        this.props.Header.setTitle('预约');
    }
    render () {
        return (
            <div>预约</div>
        );
    }
}
export default Appoint;
