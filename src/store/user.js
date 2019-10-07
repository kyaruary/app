import { login as userLogin } from '../service/auth';
import { setPassword } from '../service/password';
export const user = {
    state: {
        username: '',
        user_id: '',
        avator: '',
        user_state: '',
        secret: '',
    },
    mutations: {
        setUser(state, { username, user_id, avator, user_state, secret }) {
            state.username = username;
            state.user_id = user_id;
            state.avator = avator;
            state.user_state = user_state;
            state.secret = secret;
        },
        setPassword(state, user_state) {
            state.user_state = user_state;
            const user = JSON.parse(window.localStorage.getItem('currentUser'));
            user.user_state = user_state;   
            window.localStorage.setItem('currentUser', JSON.stringify(user));
        }
    },
    actions: {
        async login({ commit }, { secret }) {
            const user = await userLogin({ secret });
            if (user) {
                commit('setUser', { ...user, secret });
                window.localStorage.setItem(user.username + 'secret', secret);
                window.localStorage.setItem('authToken', user.token);
                window.localStorage.setItem('currentUser', JSON.stringify(user));
                let userList = window.localStorage.getItem('userList') || '{}';
                userList = JSON.parse(userList);
                userList[user.username] = true;
                window.localStorage.setItem('userList', JSON.stringify(userList));
                return true;
            } else {
                return false;
            }
        },
        async setPwd({ commit }, pwd) {
            const flag = await setPassword(pwd);
            if (flag) {
                commit('setPassword', flag);
            }
        }
    }
}   