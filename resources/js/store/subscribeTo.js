import $store from './index';

export const subscribeTo = (type, callback) => {
    $store.subscribe((payload, state) => {
        if(payload.type === type) {
            callback.call({}, type, state);
        }
    });
};
