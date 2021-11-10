import Vue from 'vue';
import Vuex from 'vuex';
// import generalData from './general';
// import favoritesData from './favoritos';

const generalData = {
    state: () => {
        return {
            index: 0,
            secciones: [{
                    titulo: 'toDo',
                    items: [{
                            titulo: 'cook',
                            descripcion: '2 eggs'
                        },
                        {
                            titulo: 'eat',
                            descripcion: 'hamburguer'
                        }
                    ]
                },
                {
                    titulo: 'Doing',
                    items: [{
                            titulo: 'smt',
                            descripcion: 'xx2 xxx'
                        },
                        {
                            titulo: 'smt2',
                            descripcion: 'hamburguer'
                        }
                    ]
                }
            ],

        }
    },
    mutations: {
        test1(state) {
            const newSection = {
                titulo: "Nueva seccion",
                items: [],
            };
            state.secciones.push(newSection);
            console.log('entree',state.secciones)
        }
    },
    actions: {
        test1({
            commit
        }) {
            commit('test1');
        }
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        generalData
    }
});