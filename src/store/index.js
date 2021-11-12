import Vue from 'vue';
import Vuex from 'vuex';
// import generalData from './general';
// import favoritesData from './favoritos';

const generalData = {
    state: () => {
        return {
            idSeccion: 0,
            secciones: [],
        }
    },
    mutations: {
        agregarSeccion(state) {
            const newSection = {
                titulo: "Nueva seccion",
                items: [],
                id: state.idSeccion,
                idRef: 0
            };
            state.secciones.push(newSection);
            state.idSeccion += 1;
        },
        changeTitle(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload.id) {
                    state.secciones[i].titulo = payload.titulo
                    break;
                }
            }
        },
        deleteSeccion(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload) {
                    state.secciones.splice(i, 1);
                    break;
                }
            }
        },
        agregarTask(state, payload) {
            const newTask = {
                titulo: 'hola',
                descripcion: '',
                id: state.secciones[payload].idRef,
                status: 'activa',
            };
            state.secciones[payload].items.push(newTask);
            console.log(state.secciones)
            state.secciones[payload].idRef += 1;
            console.log(payload)
        },
    },

    actions: {
        agregarSeccion({
            commit
        }) {
            commit('agregarSeccion');
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
        agregarTask({
            commit
        }, payload) {
            commit('agregarTask', payload);
        }
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