import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'

import '../styles/globals.css'
import { msalConfig } from '../config/auth-config'
import { HeaderBar } from '../components'

const CustomApp = ({ Component, pageProps }) => {
  const instance = new PublicClientApplication(msalConfig)

  return (
    <MsalProvider instance={instance}>
      <HeaderBar />
      <Component {...pageProps} foo="bar" />
    </MsalProvider>
  )
}

export default CustomApp
