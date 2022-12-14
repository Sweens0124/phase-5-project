import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Copyright (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" { ...props }>
      { 'Copyright © ' }
      <Link color="inherit" href="https://mui.com/">
        Girls Getaways
      </Link>{ ' ' }
      { new Date().getFullYear() }
      { '.' }
    </Typography>
  );
}

const theme = createTheme();

const Login = ({ onLogin }) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate();

  function handleLoginResponse (user) {
    onLogin(user)
    navigate("/")
  }

  function handleSignupRoute () {
    navigate('/signup')
  }

  function handleSubmit (e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => handleLoginResponse(user))
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <ThemeProvider theme={ theme }>
      <Grid container component="main" sx={ { height: '100vh' } }>
        <CssBaseline />
        <Grid
          item
          xs={ false }
          sm={ 4 }
          md={ 7 }
          sx={ {
            backgroundImage: 'url(https://cdn.wallpapersafari.com/12/49/HgqhM5.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[ 50 ] : t.palette.grey[ 900 ],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } }
        />
        <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
          <Box
            sx={ {
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={ username }
                onChange={ (e) => setUsername(e.target.value) }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={ (e) => setPassword(e.target.value) }
                value={ password }
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={ handleSignupRoute }>
                    { "Don't have an account? Sign Up" }
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={ { mt: 5 } } />
            </Box>
            <section className="login-errors">
              { errors ? (<div>
                { errors.map((err) => (
                  <div key={ err }>{ err }</div>)) }</div>
              ) : null }
            </section>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;