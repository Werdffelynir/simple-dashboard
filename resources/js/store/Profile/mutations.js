
import defaultState from './state';

export const SET_USER = 'SET_USER';
export const SET_CSRF = 'SET_CSRF';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const REMOVE_CREDENTIALS = 'REMOVE_CREDENTIALS';

// export const credentialsKeys = {
//     expires_at: null,
//     token: null,
//     token_type: null,
// };

export default {

    [SET_USER] (state, payload) {
        if (payload)
            state.user = {...defaultState.user, ...payload};
        else
            state.user = {};
    },

    [SET_CREDENTIALS] (state, payload) {
        if (payload)
            state.credentials = {...defaultState.credentials, ...payload};
        else
            state.credentials = {};
    },

    [REMOVE_CREDENTIALS] (state, payload) {
        state.credentials = {}
    },

    [SET_CSRF] (state, payload) {
        state.csrf = payload;
    },

}
