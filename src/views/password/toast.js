import { Toast } from 'mint-ui'
export const toast = msg => {
    Toast({
        message: msg,
        position: 'bottom',
    })
}