const isDev = process.env.NODE_ENV === 'production' ? false : true;

export const AxiosConf = {
    apiUrl: isDev ? 'http://localhost:8080/mock' : ''
}

export const canvasConf = {

}