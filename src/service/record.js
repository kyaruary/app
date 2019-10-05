import { instance as axios } from '../util/request';


export const getInjectRecord = async (id, pn) => {
    return axios.get('/record/inject/' + id, { params: { pn } });
}

export const getReleaseRecord = async (id, pn) => {
    return axios.get('/record/release/' + id, { params: { pn } });
}
export const getAccelerationTime = async (id) => {
    return axios.get('/record/acceleration_time/' + id);
}