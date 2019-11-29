import $store from './index';


export const getterWith = (type) => {
    return $store.getters[type]
};

export const getterWithModule = (module, type) => {
    return $store.getters[module + '/' + type]
};
