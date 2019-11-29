// import $store from '../store'
// import state from '../store/Profile/state';
import $router from '../router/index'
import Vue from 'vue';
import {URL_GET_USER, URL_POST_LOGIN, URL_POST_REGISTER} from '../api';
import {commitWith, commitWithModule} from '../store/commitWith';
import {subscribersStart} from './subscribers.service';
import {GET_CREDENTIALS, GET_USER} from '../store/Profile/getters';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {getterWithModule} from '../store/getterWith';
import {localCredentials} from '../util/localStoreHandler';
import {setNotificationWithError} from '../services/base.service';

subscribersStart();


export const getCredentials = () => {
    return getterWithModule('profile', GET_CREDENTIALS);
};

export const getUser = () => {
    return getterWithModule('profile', GET_USER);
};

export const isAuthorized = () => {
    return getterWithModule('profile', GET_CREDENTIALS).token && getterWithModule('profile', GET_USER).id ;
};

export const init = () => {
    if (!getCredentials().token && !getUser().id && location.pathname.lastIndexOf('/login') === -1) {

        localCredentials.remove();
        $router.push('/login');
    }
};

export const makeLogin = (data) => {
    Vue.requesterPOST(URL_POST_LOGIN, data).then((response) => {

        if (!response.error && localCredentials.validate(response.credentials)) {
            localCredentials.set(response.credentials);
            setNotificationWithError('Login is success!');
            $router.push('/');
        } else {
            setNotificationWithError(response.message || 'Some sing wrong. Login is failed.');
        }

    }).catch((err)=>{
        setNotificationWithError('Connect to server have error');
    });

};


export const makeRegister = (data) => {};


export const makeLogout = () => {
    Vue.requesterCredentialsRemove();
    localCredentials.remove();
    commitWithModule('profile', SET_USER, false);
    commitWithModule('profile', SET_CREDENTIALS, false);
    $router.push('/login');
};
