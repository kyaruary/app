import { instance as axios } from '../util/request';


export const setPassword = async (password) => {
    return axios.post('/auth/setpassword', { password });
}

export const resetPassword = async (old_password, new_password) => {
    return axios.post('/auth/resetpassword', { old_password, new_password });
}