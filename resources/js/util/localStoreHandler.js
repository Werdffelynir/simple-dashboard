

export const localCredentials = {

    session: 'credentials',

    set: (crs) =>
        localStorage.setItem(localCredentials.session, JSON.stringify(crs)),

    get: () =>
        JSON.parse(localStorage.getItem(localCredentials.session)),

    remove: () =>
        localStorage.removeItem(localCredentials.session),

    credentials: (crs) =>
        localCredentials.validate(crs || localCredentials.get()),

    validate: (crs) => {
        const {token, token_type, expires_at} = crs;

        if (!crs || !token || !token_type || !expires_at)
            throw new Error('Credentials not valid');

        if (token.length < 1000)
            throw new Error('Token not valid');

        if (token_type !== 'Bearer')
            throw new Error('Token type is not equal "Bearer"');

        if ((new Date(expires_at)).getTime() <= (new Date()).getTime()) {
            localCredentials.remove();
            throw new Error('Token access time is expired');
        }

        return {token, token_type, expires_at};
    }
};

