import { instance as axios } from '../util/request';


export const getFeedbackList = async (id) => {
    return axios.get('/feedback');
}

export const addFeedback = async (feedback) => {
    return axios.post('/feedback', { feedback });
}