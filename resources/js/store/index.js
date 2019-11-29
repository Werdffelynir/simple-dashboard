import Vue from 'vue'
import Vuex from 'vuex'
import UIModule from './UI'
import ProfileModule from './Profile'


Vue.use(Vuex);


const store = new Vuex.Store({
    strict: true,
    modules: {
        ui: UIModule,
        profile: ProfileModule,
    },
});

export default store;
