import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Waypoint Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
   
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" sx={{textAlign: 'center'}}>
          <LinkedInIcon color="primary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/>
          <Link href="https://github.com/zeyasar" target='_blank' rel="noopener" underline="none"><GitHubIcon color="primary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/></Link>
          <TwitterIcon color="primary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/>
          <Link href="https://www.instagram.com/zynpysr67/" target='_blank' rel="noopener" underline="none"><InstagramIcon color="primary" sx={{ height: 32, width: 32, margin:'0.5rem' }}/></Link>
          <Copyright />
        </Container>
      </Box>
  );
}