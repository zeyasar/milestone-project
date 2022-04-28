import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import {Formik} from 'formik';
import * as Yup from "yup";
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../utils/firebase'


const signUpValidationSchema = Yup.object({
  username: Yup.string()
    .required("Display name is required")
    .min(2, "Too short")
    .max(15, "Must be 15 char or less"),
  surname: Yup.string()
    .required("Surname is required")
    .min(2, "Too short")
    .max(15, "Must be 15 char or less"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(6, "Password is too short - should be 6 chars minimum")
    .matches(/\d+/, "Password must have a number"),
  password2: Yup.string()
    .required("No password provided")
    .min(6, "Password is too short - should be 6 chars minimum")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Register() {
  const navigate = useNavigate()
  
  const initialValues = {
    username : '',
    surname:'',
    email : '',
    password:'',
    password2:''
  }

  const handleSubmit = (values, {resetForm}) => {
    
    const username = values.username
    const surname = values.surname
    const displayName = `${username} ${surname}`;
    const email = values.email;
    const password = values.password;
    signup(email, password, navigate, displayName)
    
    resetForm();
  }



  return (
    <>
    <CssBaseline />
    <Container
      sx={{
        marginTop: '1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
        Sign Up
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
      {({values, handleChange, handleSubmit, errors, touched, handleBlur}) => (<form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField value={values.username} onChange={handleChange} name="username" label="Name" variant="outlined" helperText={touched.username && errors.username} error={touched.username && Boolean(errors.username)} onBlur={handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField value={values.surname} onChange={handleChange} name="surname" label="Surname" variant="outlined" helperText={touched.surname && errors.surname} error={touched.surname && Boolean(errors.surname)} onBlur={handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField value={values.email} onChange={handleChange} name="email" label="Email" variant="outlined" helperText={touched.email && errors.email} error={touched.email && Boolean(errors.email)} onBlur={handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" value={values.password} onChange={handleChange} name="password" label="Password" helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} onBlur={handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password2"
              type="password"
              label="Password Again"
              variant="outlined"
              value={values.password2} onChange={handleChange}
              helperText={touched.password2 && errors.password2} error={touched.password2 && Boolean(errors.password2)} onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>)}

      </Formik>
      <p>
        Already have an account?
        <Link to='/Login'
          style={{
            color: 'rgb(56,116,203)',
            textDecoration: 'none',
            fontWeight: '600',
            paddingLeft: '0.5rem',
          }}
        >
          Login
        </Link>
      </p>
    </Container>
    </>
  );
}

export default Register;