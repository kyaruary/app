export const secret = {
    state: {
        secret: ''
    },
    mutations: {
        setSecret(state, playload) {
            state.a = playload;
        }
    },
    actions: {
        setSecret({ commit }, playload) {
            commit('setSecret', playload);
        }
    }
}