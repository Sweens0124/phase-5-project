import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

const SignUp = ({ onLogin }) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ errors, setErrors ] = useState([])

  function handleSubmit (e) {
    e.preventDefault()
    setErrors([])
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => onLogin(user))
        navigate('/')
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  const navigate = useNavigate()

  const handleLoginRoute = () => {
    navigate('/login')
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 3 } }>
            <Grid container spacing={ 2 }>
              <Grid item xs={ 12 }>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={ username }
                  onChange={ (e) => setUsername(e.target.value) }
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                />
              </Grid>
              <Grid item xs={ 12 }>
              </Grid>
            </Grid>
            <section className="signup-errors">
              { errors.map(err => (<div key={ err }> { err } </div>)) }
            </section>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={ { mt: 3, mb: 2 } }
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={ handleLoginRoute }>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={ { mt: 5 } } />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;