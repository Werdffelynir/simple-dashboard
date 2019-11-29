import { requestGet, requestPost } from '../util/request';

const Requester = {
    requesterCredentialsList: null,
    requesterHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Authorization': null,
    },
    install (Vue, options) {
        Vue.requesterCredentialsRemove = () => {
            this.requesterCredentialsList = this.requesterHeaders.Authorization = null;
        };
        Vue.requesterCredentials = (credentials) => {
            this.requesterCredentialsList = credentials;
            this.requesterHeaders.Authorization = credentials.token_type + ' ' + credentials.token};
        Vue.requesterGET = (url, data = {}) => requestGet(url, data, this.requesterHeaders);
        Vue.requesterPOST = (url, data = {}) => requestPost(url, data, this.requesterHeaders);
        Vue.requesterHeaders = () => this.requesterHeaders;
        Vue.requesterHasCredentials = () => !!(this.requesterCredentialsList && Object.keys(this.requesterCredentialsList));
        // Vue.mixin({ created() {} });
        Vue.prototype.$requester = {
            get: Vue.requesterGET,
            post: Vue.requesterPOST,
            credentials: Vue.requesterCredentials,
        }
    }
};

export default Requester;
