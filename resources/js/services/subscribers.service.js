import Vue from 'vue';
import {URL_GET_USER} from '../api';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {commitWith} from '../store/commitWith';
import {subscribeTo} from '../store/subscribeTo';

export const subscribersStart = function () {

    subscribeTo('profile/' + SET_CREDENTIALS, (type, state) => {
        Vue.requesterGET(URL_GET_USER).then((response)=>{
            commitWith('profile/' + SET_USER, response);
        }).catch((err)=>{
            console.log('Service subscribersStart "auth.subscribers.service.js" throw error: ', err.message());
        })
    });

};
