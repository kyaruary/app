import { login as userLogin } from '../service/auth';

export const user = {
    state: {
        username: '',
        user_id: '',
        avator: '',
        user_state: '',
    },
    mutations: {
        setUser(state, { username, user_id, avator, user_state }) {
            state.username = username;
            state.user_id = user_id;
            state.avator = avator;
            state.avauser_statetor = user_state;
        }
    },
    actions: {
        async login({ commit }, { secret }) {
            const user = await userLogin(secret);
            console.log(user);
            commit('setUser', user);
            console.log('ok')
        }
    }
}   