const isDev = process.env.NODE_ENV === 'production' ? false : true;

export const AxiosConf = {
    apiUrl: isDev ? 'http://localhost:3000/api' : ''
}

export const canvasConf = {

}