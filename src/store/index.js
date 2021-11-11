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
            };
            state.secciones.push(newSection);
            state.idSeccion += 1;
        },
        changeTitle(state, payload) {
            for(let i = 0; i < state.secciones.length; i++) {
                if(state.secciones[i].id === payload.id) {
                    state.secciones[i].titulo = payload.titulo
                    break;
                }
            }
        },
        deleteSeccion(state, payload){
            for(let i = 0; i < state.secciones.length; i++) {
                if(state.secciones[i].id === payload.id) {
                    state.secciones.splice(payload.id, 1)
                    console.log(payload.id);
                    break;
                }
            }
            this.ventanitaDelete = false;
        }
    },

    actions: {
        agregarSeccion({ commit }){
            commit('agregarSeccion');
        },
        changeTitle({ commit }, payload) {
            commit('changeTitle', payload)
        },
        deleteSeccion({ commit },payload){
            
            commit('deleteSeccion',payload);
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