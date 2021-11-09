import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Favoritos from './views/favoritos/Favoritos.vue'
import CardsContainer from './components/CardsContainer.vue'
import Papelera from './views/papelera/Papelera.vue'
import './assets/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: CardsContainer,
    },
    {
        path: "/favoritos",
        component: Favoritos,
    },
    {
        path: "/papelera",
        component: Papelera,
    }

]

const router = new VueRouter({
    mode: "history",
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')