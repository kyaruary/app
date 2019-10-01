import axios from 'axios';
import { AxiosConf } from '../config';

const instance = axios.create({
    baseURL: AxiosConf.apiUrl,
});

instance.interceptors.response.use((res) => {
    if (res.status >= 200 && res.status < 400) {
        return res.data;
    } else {
        throw "api request wrong"
    }
});

export {
    instance
}