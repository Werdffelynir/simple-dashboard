import Vue from 'vue';
import {URL_POST_PROFILE_CHANGE, URL_POST_PROFILE_UPDATE} from '../api';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {commitWith} from '../store/commitWith';

export const saveUser = function (data) {
    Vue.requesterPOST(URL_POST_PROFILE_UPDATE, data).then((response) => {
        commitWith('profile/' + SET_USER, data);
    }).catch((err)=>{
        console.log('Service saveUser "profile.service.js" throw error: ', err.message);
    })
};

export const changePassword = function (data) {
    Vue.requesterPOST(URL_POST_PROFILE_CHANGE, data).then((response) => {
        if (!response.error && response.token) {
            commitWith('profile/' + SET_CREDENTIALS, {token: response.token});
        }
    }).catch((err)=>{
        console.log('Service changePassword "profile.service.js" throw error: ', err.message);
    })
};
