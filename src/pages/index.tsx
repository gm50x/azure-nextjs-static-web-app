import Head from 'next/head'
import { UnauthenticatedTemplate, AuthenticatedTemplate, useMsal } from '@azure/msal-react'
import { Button } from '@material-ui/core'

import styles from '../styles/Home.module.css'
import { loginRequest } from '../config/auth-config'

export default function Home() {
  const { instance } = useMsal()

  const handlePrintTokenClick = () => {
    const accounts = instance.getAllAccounts()

    if (accounts && accounts.length) {
      instance.setActiveAccount(accounts[0])
    }

    const activeAccount = instance.getActiveAccount()
    instance.acquireTokenSilent({ ...loginRequest, account: activeAccount })
      .then(tokenResponse => console.log(tokenResponse))

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zack's Portal</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <UnauthenticatedTemplate>
          <p className={styles.description}>
            You are not authenticated. Log in the see the docs.
          </p>

        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <Button onClick={handlePrintTokenClick} variant="outlined" color="primary">Print Token to the Console</Button>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </AuthenticatedTemplate>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
