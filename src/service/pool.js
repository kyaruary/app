import { instance as axios } from '../util/request';

export const getPool = async secret => {
    return axios.get('/pool');
}