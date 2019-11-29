export const VISIBLY_NOTIFICATION = 'VISIBLY_NOTIFICATION';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const SET_NOTIFICATION_TYPE = 'SET_NOTIFICATION_TYPE';
export const SET_NOTIFICATION_MESSAGE = 'SET_NOTIFICATION_MESSAGE';

export default {

    [VISIBLY_NOTIFICATION] (state, payload) {
        state.showNotification = !!payload
    },

    [SET_NOTIFICATION_TYPE] (state, payload) {
        state.notification.type = payload;
    },

    [SET_NOTIFICATION_MESSAGE] (state, payload) {
        state.notification.message = payload;
    },

}
