import { Configuration, PopupRequest, RedirectRequest } from "@azure/msal-browser"

export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID,
        authority: process.env.NEXT_PUBLIC_AZURE_AUTHORITY,
        knownAuthorities: [process.env.NEXT_PUBLIC_AZURE_KNOWN_AUTHORITIES],
    }
}

export const loginRequest: PopupRequest | RedirectRequest = {
    scopes: [process.env.NEXT_PUBLIC_AZURE_LOGIN_SCOPES]
}

