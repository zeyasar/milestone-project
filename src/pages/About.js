import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';



export default function About() {
  return (
    <div style={{
      backgroundImage:`url(https://r.resimlink.com/Zg9SXGaKAMV5.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",}}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        Hi, &#128075; I'm Zeynep 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{mt:5}}>
        I’m currently learning Full-Stack Development Languages. This is my milestone project. I hope you will like it.
        </Typography>
        <Typography variant="body1" sx={{mt:5}}> <Link href="mailto:zynpysr67@gmail.com" rel="noopener" underline="none">Send email</Link> :
        zynpysr67@gmail.com</Typography>
        <Typography variant="body1" sx={{mt:5}}><Link href="https://github.com/zeyasar/milestone-project" target="_blank" rel="noopener" underline="none">Project Source Code</Link></Typography>
      </Container>
    </Box>
    </div>
  );
}