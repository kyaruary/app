import { instance as axios } from '../util/request';

export const getPool = async () => {
    return axios.get('/pool');
}