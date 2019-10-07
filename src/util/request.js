import axios from 'axios';
import { AxiosConf } from '../config';
import { exceptionFilter } from './exceptionFilter'
const instance = axios.create({
    baseURL: AxiosConf.apiUrl,
});

instance.interceptors.response.use((res) => {
    if (res.status >= 200 && res.status < 500) {
        if (res.data.code === 0) {
            return res.data.data;
        } else {
            exceptionFilter(res.data.code);
            return false;
        }
    } else {
        return false;
    }
});
instance.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('authToken')
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})
export {
    instance
}