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
                id: '_' + Math.random().toString(36).substr(2, 9)
            };
            state.secciones.push(newSection);
            console.log(state.secciones)
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
            state.secciones.splice(payload, 1)
        },
        agregarTask(state, payload) {
            const newTask = {
                titulo: 'hola',
                descripcion: '',
                status: 'activa',
                id: '_' + Math.random().toString(36).substr(2, 9)
            };
            console.log(state.secciones)
            const newSecciones = state.secciones.map(elem => {
                if (elem.id === payload) elem.items.push(newTask)
                return elem
            })
            state.secciones = newSecciones
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