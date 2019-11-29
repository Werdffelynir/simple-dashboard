import {commitWith} from '../store/commitWith';
import {SET_NOTIFICATION_MESSAGE, SET_NOTIFICATION_TYPE, VISIBLY_NOTIFICATION} from '../store/UI/mutations';

export const setNotificationWithError = function (message, ifError) {
    commitWith('ui/' + VISIBLY_NOTIFICATION, true);
    commitWith('ui/' + SET_NOTIFICATION_TYPE, ifError ? 'error' : 'ok');
    commitWith('ui/' + SET_NOTIFICATION_MESSAGE, message);
};


