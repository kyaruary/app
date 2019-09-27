import axios from 'axios';
import { config } from '../config';

const instance = axios.create({
    baseURL: config.apiUrl,
});
instance.interceptors.response.use((res) => {
    if (res.status >= 200 && res.status < 400) {
        return res.data;
    } else {
        throw "api request wrong"
    }
})

instance.interceptors.request.use(() => {
    // logic before request
}, (e) => {
    console.log('error')
    })

export {
    instance
}