import { instance as axios } from '../util/request';

export const get = async id => {
    return axios.get('/bill/' + id);
}