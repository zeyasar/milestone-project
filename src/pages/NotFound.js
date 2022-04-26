import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';




export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          Oops!
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom>
        404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        PAGE NOT FOUND
        </Typography>
        <Typography variant="body1"><Link style={{textDecoration: 'none', color:'darkgrey'}} to={'/'}>Go Waypoint</Link></Typography>
      </Container>
    </Box>
  );
}