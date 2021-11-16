import Vue from 'vue';
import Vuex from 'vuex';

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
                titulo: "Nueva Tarjeta",
                items: [],
                status: 'activa',
                id: '_' + Math.random().toString(36).substr(2, 9)
            };
            state.secciones.push(newSection);

        },
        //FIXME: falta que ande posta.
        limpiarPapelera(state) {
            if (confirm("¿Seguro/a que querés borrar todo definitivamente?", "") != null) {
                for (let i = 0; i < state.secciones.length; i++) {
                    if (state.secciones[i].status === "inactiva") {
                        state.secciones.splice(i, 1);
                    }
                }
            }
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
        changeDescriptionCard(state, payload) {
            for (let i = 0; i < state.secciones.length; i++) {
                if (state.secciones[i].id === payload.idSeccion) {
                    for (let j = 0; j < state.secciones[i].items.length; j++) {
                        if (state.secciones[i].items[j].id === payload.id) {
                            state.secciones[i].items[j].descripcion = payload.descripcion
                            break;
                        }
                    }
                }
            }
        },
        deleteSeccion(state, payload) {
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
                titulo: 'titulo',
                descripcion: 'descripcion',
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
        changeDescriptionCard({
            commit
        }, payload) {
            commit('changeDescriptionCard', payload)
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
        limpiarPapelera({
            commit
        }) {
            commit('limpiarPapelera');
        },
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        generalData
    }
});