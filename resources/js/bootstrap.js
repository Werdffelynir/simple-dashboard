import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import AppComponent from './components/App.vue';
import vuetify from './plugins/vuetify'
import Requester from './plugins/requester'
import store from './store';
import router from './router/index';

Vue.use(Requester);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    vuetify,
    el: '#app',
    components: {
        'app-component': AppComponent,
    },
});
