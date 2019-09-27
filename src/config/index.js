const isDev = process.env.NODE_ENV === 'production' ? false : true;
export const config = {
    apiUrl: isDev ? 'http://localhost:8080/mock' : ''
}