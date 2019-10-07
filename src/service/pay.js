import { instance as axios } from '../util/request';


export const injectPay = async (password, ph) => {
    return axios.post('/pay/inject', { password, ph });
}

export const releasePay = async (password) => {
    return axios.post('/pay/release', { password });
}