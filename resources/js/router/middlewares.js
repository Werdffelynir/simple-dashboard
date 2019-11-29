import $store from '../store/index'
import $router from '../router/index'
import Vue from 'vue';
import {getterWithModule} from '../store/getterWith';
import {GET_CREDENTIALS, GET_USER} from '../store/Profile/getters';
import {commitWithModule} from '../store/commitWith';
import {SET_CREDENTIALS} from '../store/Profile/mutations';
import {localCredentials} from '../util/localStoreHandler';


export function initCurrentUserStateMiddleware (to, from, next) {

    if (!getterWithModule('profile', GET_CREDENTIALS).token && !getterWithModule('profile', GET_USER).id) {
        try {
            let credentials = localCredentials.credentials();
            if (credentials) {
                Vue.requesterCredentials(credentials);
                commitWithModule('profile', SET_CREDENTIALS, credentials);
            }
        } catch (e) {  }
    }

    next()
}

