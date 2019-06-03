/**
 * Created by hqer on 2019/5/28.
 */
import {observable,action } from 'mobx';
class Header {
    @observable title = '';
    @observable isShowBack = false;
    @observable router = 'baby';
    @action
    setTitle (_title) {
        this.title = _title;
    }
    @action
    setShowBack (_s) {
        this.isShowBack = _s;
    }
    @action
    setInfo (_info) {
        if (typeof _info === 'object' && 'title' in _info) {
            this.title = _info.title;
        }
        if (typeof _info === 'object' && 'isShowBack' in _info) {
            this.isShowBack = _info.isShowBack;
        }
        if (typeof _info === 'object' && 'router' in _info) {
            this.router = _info.router;
        }
    }
}

export default new Header();
