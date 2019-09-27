import { instance } from '../util/request'

const apiTest = async () => {
    return await instance.get('/data.json');
}

export {
    apiTest,
}