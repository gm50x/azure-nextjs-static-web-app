import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { loginRequest } from '../../config/auth-config'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: '100%',
    flexGrow: 5
  }
}))

export const HeaderBar = ({ title = 'Zack\'s Portal' }) => {
  const styles = useStyles()
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()

  const handleLogin = () => {
    instance.loginRedirect(loginRequest)
  }

  const handleLogout = () => {
    instance.logout()
  }

  return (
    <>
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar className={styles.container}>
            <IconButton className={styles.menuButton} aria-label="menu" color="inherit">
              <Menu />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              {title}
            </Typography>
            {!isAuthenticated
              ? (
                <Button onClick={() => handleLogin()}>Login</Button>
              )
              : (
                <Button onClick={() => handleLogout()}>Logout</Button>
              )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}