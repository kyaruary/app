import { instance as axios } from '../util/request';

export const login = async secret => {
    return axios.post('/auth/login', { params: { secret } });
}