import { get } from '../service/bill'
export const bill = {
    state: {
        detail: {
            release_time: '∞',
            speed_level: '0',
            ph: '0',
            layer: '',
            benefit: '0',
            acceleration_time: '00:00'
        }
    },
    mutations: {
        setBill(state, playload) {
            state.detail = { ...playload }
        }
    },
    actions: {
        async getBill({ commit }, id) {
            const bill = await get(id);
            commit('setBill', bill);
        }
    }
}