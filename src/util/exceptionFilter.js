import { MessageBox } from 'mint-ui';
export const exceptionFilter = code => {
    switch (code) {
        case 1:
            MessageBox('提示', '验证错误')
            break;
        default:
            MessageBox('提示', '验证错误')
            break;
    }
}