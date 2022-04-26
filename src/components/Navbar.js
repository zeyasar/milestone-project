import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WaypointLogo from '../assets/favicon.ico'
import { useNavigate } from 'react-router-dom';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { logout } from '../utils/firebase';
import {AppContext} from '../context/AppContext';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  const {currentUser} = React.useContext(AppContext)
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    logout()
    navigate(`/`)

  }
  

  return (
    <AppBar position="static" sx={{backgroundColor:"rgb(167,195,178)"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={WaypointLogo} alt="logo" style={{width:'3rem'}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/`)}
                  >Waypoint</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/About`)}
                  >About</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          <img src={WaypointLogo} alt="logo" style={{width:'3rem'}}/>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Typography textAlign="center"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/`)}
                  >Waypoint</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/About`)}
                  >About</Typography>
              </Button>
           
          </Box>

          {currentUser ? (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography
                sx={{
                  marginRight: "0.3rem",
                }}
              >
                {currentUser.displayName}
              </Typography>
              <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/Profile`)}
                  >Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={handleLogout}
                  >Logout</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate(`/NewBlog`)}
                  >New Blog</Typography>
                </MenuItem>
            </Menu>
          </Box>):(
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              onClick={handleLogin}
              color="inherit"
            >
              <Typography
                sx={{
                  marginRight: "0.5rem",
                }}
              >
                Log In
              </Typography>
              <LockOpenIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
