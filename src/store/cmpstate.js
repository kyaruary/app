export const cmpstate = {
    state: {
        sidebarShow: false
    },
    mutations: {
        showSidebar(state) {
            state.sidebarShow = true;
        },
        hideSidebar(state) {
            state.sidebarShow = false;
        }
    },
}