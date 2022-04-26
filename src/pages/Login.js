import React, {useState} from 'react';
import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import { login,loginWithGoogle } from '../utils/firebase';



function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password, navigate)
    
  }

  const handleGoogleSingIn = () => {
    loginWithGoogle(navigate);
  };

  return (
    <>
    <CssBaseline />
    <Container
      sx={{
        marginTop: '1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
      maxWidth="sm"
    
    >
      <Avatar
        sx={{
          margin: '1rem auto',
          bgcolor: blue[500],
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography sx={{ margin: '1rem' }} variant="h4">
        Log In
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <TextField onChange={(e) => setEmail(e.target.value)} name="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" onChange={(e) => setPassword(e.target.value)} name="password" label="Password" variant="outlined"/>
          </Grid>
         
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </Grid>
        </Grid>
        
      </form>
      <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '1rem' }}
                onClick={handleGoogleSingIn}
              >
                CONTINUE WITH GOOGLE
              </Button>
        </Grid>
      <p>
      Need an account?
        <Link
          sx={{
            textDecoration: 'none',
            fontWeight: '600',
            paddingLeft: '0.5rem',
          }}
          href="/Register"
        >
          Sign Up
        </Link>
      </p>
    </Container>
    </>
  );
}

export default Login;