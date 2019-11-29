import $store from './index';

export const commitWith = (type, data) => {
    return $store.commit(type, data );
};

export const commitWithModule = (module, type, data) => {
    return $store.commit(module + '/' + type, data );
};
