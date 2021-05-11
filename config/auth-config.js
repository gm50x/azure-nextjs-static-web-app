export const msalConfig = {
    auth: {
        clientId: 'dd8bfeb6-00bf-46f6-9f16-3232532a351c',
        authority: 'https://nsourcerylogin.b2clogin.com/nsourcerylogin.onmicrosoft.com/B2C_1_SELF_SERVICE',
        knownAuthorities: ['nsourcerylogin.b2clogin.com'],
        redirectUri: '/',
        postLogoutRedirectUri: '/'
    }
}

export const loginRequest = {
    scopes: ['https://nsourcerylogin.onmicrosoft.com/nsourceryapp/User.Login'],
}

