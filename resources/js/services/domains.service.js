import Vue from 'vue';
import {URL_GET_DOMAINS} from '../api';
import {commitWithModule} from '../store/commitWith';
import {SET_DOMAINS_LIST} from '../store/Domains/mutations';

export const loadUserDomainsService = function () {
    Vue.requesterGET(URL_GET_DOMAINS).then((response) => {

        if (response.error) {
            // todo: ErrorWrapper
        } else if (response.list) {
            commitWithModule('domains', SET_DOMAINS_LIST, [...response.list])
        }

    }).catch((err) => {
        // todo: ErrorWrapper
        console.log('Service loadUserDomains "domains.service.js" throw error: ', err.message);
    })
};
