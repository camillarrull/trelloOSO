import Vue from 'vue';
import Vuex from 'vuex';
// import generalData from './general';
// import favoritesData from './favoritos';

const generalData = {
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

Vue.use(Vuex);

export default new Vuex.Store(
    {
        modules: {
            generalData
        }
    }
);