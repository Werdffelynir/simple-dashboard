

export const VISIBLY_NOTIFICATION = 'VISIBLY_NOTIFICATION';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const GET_NOTIFICATION_TYPE = 'GET_NOTIFICATION_TYPE';
export const GET_NOTIFICATION_MESSAGE = 'GET_NOTIFICATION_MESSAGE';

export default {

    [VISIBLY_NOTIFICATION] (state) {
        return state.showNotification
    },

    [GET_NOTIFICATION_TYPE] (state) {
        return state.notification.type
    },

    [GET_NOTIFICATION_MESSAGE] (state) {
        return state.notification.message
    },
}
