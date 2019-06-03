/**
 * Created by hqer on 2019/5/28.
 */
import {observable,action } from 'mobx';
/* status 0 未添加，1 已添加未设置，2 已设置未预约，3 已预约*/
class BabyInfo {
    @observable status = 0;
    @observable name = '阿拉蕾';
    @observable id = '001';
    @observable nextVaccination = 'A流脑疫苗';
    @action
    setStatus (_i) {
        this.status = _i;
    }
    @action
    setId (_id) {
        this.id = _id;
    }
    @action
    setNextVaccination (_vaccination) {
        this.nextVaccination = _vaccination;
    }
    @action
    setName (_name) {
        this.name = _name;
    }
    @action
    setInfo (_info) {
        if (typeof _info === 'object' && 'status' in _info) {
            this.status = _info.status;
        }
        if (typeof _info === 'object' && 'name' in _info) {
            this.name = _info.name;
        }
        if (typeof _info === 'object' && 'id' in _info) {
            this.id = _info.id;
        }
        if (typeof _info === 'object' && 'nextVaccination' in _info) {
            this.nextVaccination = _info.nextVaccination;
        }
    }
}

export default new BabyInfo();
