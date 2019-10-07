import { getVbm } from '../service/vbm'
export const vbm = {
    state: {
        count: 0
    },
    mutations: {
        setVbm(state, count) {
            state.count = count
        },
    },
    actions: {
        async getVbm({ commit }) {
            const count = await getVbm();
            commit('setVbm', count);
        }
    }
}