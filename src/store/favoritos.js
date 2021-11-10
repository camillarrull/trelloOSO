export const favoritesData = {
    state: () => {
        return {
            index: 0
        }
    },
    mutations: {
        incrementIndex(state) {
            state.index += 1;
        }
    },
    actions: {
        incrementIndex({commit}) {
            commit('incrementIndex');
        }
    }
}