import Vue from 'vue';
import Vuex from 'vuex';
// import generalData from './general';
// import favoritesData from './favoritos';

const generalData = {
    state: () => {
        return {
            secciones: [],
        }
    },
    mutations: {
        cargarSecciones(state, payload) {
            state.secciones = payload
        },
        agregarSeccion(state) {
            const newSection = {
                titulo: "Titulo",
                items: [],
                status: 'activa',
                // favorito: false,
                id: '_' + Math.random().toString(36).substr(2, 9)
            };
            state.secciones.push(newSection);

        },
        changeTitle(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload.id) {
                    state.secciones[i].titulo = payload.titulo
                    break;
                }
            }
        },
        changeTitleCard(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload.idSeccion) {
                    for (let j = 0; j < state.secciones[i].items.length; j++) {
                        if (state.secciones[i].items[j].id === payload.id) {
                            state.secciones[i].items[j].titulo = payload.titulo
                            break;
                        }
                    }
                }
            }
        },
        deleteSeccion(state, payload) {
            // const newSecciones = state.secciones.filter(elem => elem.id !== payload)
            // state.secciones = newSecciones
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload) {
                    console.log(state.secciones[i].status)
                    if (state.secciones[i].status !== 'inactiva') {
                        state.secciones[i].status = 'inactiva'
                    } else {
                        state.secciones[i].status = 'activa'
                    }
                }
            }
        },
        deleteTask(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload.idSeccion) {
                    for (let j = 0; j < state.secciones[i].items.length; j++) {
                        const newTask = state.secciones[i].items.filter(elem => elem.id !== payload.id)
                        state.secciones[i].items = newTask
                        break;
                    }
                }
            }
        },
        agregarTask(state, payload) {
            const newTask = {
                titulo: 'type in',
                descripcion: '',
                status: 'activa',
                id: '_' + Math.random().toString(36).substr(2, 9)
            };
            const newSecciones = state.secciones.map(elem => {
                if (elem.id === payload) elem.items.push(newTask)
                return elem
            })
            state.secciones = newSecciones
        },
        addFavorite(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {

                if (state.secciones[i].id === payload.id) {
                    if (state.secciones[i].status === 'favorito') {
                        state.secciones[i].status = 'activa'
                        console.log(state.secciones[i]);
                    } else if (state.secciones[i].status === 'activa') {
                        state.secciones[i].status = 'favorito';
                        console.log(state.secciones[i]);
                    }
                    break;
                }
            }
        },
        // changeFav(state, payload) {
        //     for (let i = 0; i < state.secciones.length; i++) {
        //         if (state.secciones[i].id === payload.id) {
        //             state.secciones[i].titulo = payload.titulo
        //             break;
        //         }
        //     }
        // },
    },

    actions: {
        agregarSeccion({
            commit
        }) {
            commit('agregarSeccion');
        },
        cargarSecciones({
            commit
        }, payload) {
            commit("cargarSecciones", payload)
        },
        changeTitle({
            commit
        }, payload) {
            commit('changeTitle', payload)
        },
        deleteSeccion({
            commit
        }, payload) {
            commit('deleteSeccion', payload);
        },
        deleteTask({
            commit
        }, payload) {
            commit('deleteTask', payload);
        },
        agregarTask({
            commit
        }, payload) {
            commit('agregarTask', payload);
        },
        changeTitleCard({
            commit
        }, payload) {
            commit('changeTitleCard', payload)
        },
        addFavorite({
            commit
        }, payload) {
            commit('addFavorite', payload);
        },
        changeFav({
            commit
        }, payload) {
            commit('changeFav', payload)
        },
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        generalData
    }
});

/*
const secciones = [
    {
        titulo: 'personales',
        id: 1,
        status: 'activa',
        favorito: true,
        cardIdRef: 0,
        cards: [
            {
                titulo: 'sacar al perro',
                descripcion: 'a la plaza de en frente',
                id: 1,
                status: 'activa',
            },
            {
                titulo: 'limpiar la cocina',
                descripcion: 'ponerle cif',
                id: 2,
                status: 'eliminada',
            }
        ]
    }
]
*/