import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

// components
import sync from './components/Sync'
import buyer from './components/Buyer'
import information from './components/Information'

Vue.component('sync', sync)
Vue.component('buyer', buyer)
Vue.component('information', information)

Vue.use(VueRouter)

// Routes
const routes = [
  {path:'/', component:sync},
  {path:'/sync', component:sync},
  {path:'/buyers', component:buyer},
  {path:'/information/:id', component:information, name:'information'},
]

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
