
export const GET_USER = 'GET_USER';
export const GET_CSRF = 'GET_CSRF';
export const GET_CREDENTIALS = 'GET_CREDENTIALS';

export default {

    [GET_USER] (state) {
        return state.user
    },

    [GET_CSRF] (state) {
        return state.csrf
    },

    [GET_CREDENTIALS] (state) {
        return state.credentials
    }
}
