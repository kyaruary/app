import { instance as axios } from '../util/request';

export const getVbm = () => {
    return axios.get('/vbm');
}