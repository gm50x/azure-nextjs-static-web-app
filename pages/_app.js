import '../styles/globals.css'
import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from '../config/auth-config'

function MyApp({ Component, pageProps }) {
  const instance = new PublicClientApplication(msalConfig)
  return (
    <MsalProvider instance={instance}>
      <Component {...pageProps} />
    </MsalProvider>
  )
}

export default MyApp
