import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import companyLogo from './images/logo.JPG'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [ 'Home' ];

const Navbar = ({ onSetUser, userLogged, loggedIn }) => {
  const [ anchorElNav, setAnchorElNav ] = useState(null);
  const [ anchorElUser, setAnchorElUser ] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate('/')
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    handleCloseUserMenu()
    navigate('/login')
  }

  function handleLogoutClick (e) {
    e.preventDefault()
    handleCloseUserMenu()
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        onSetUser(null)
        navigate('/login')
      }
    })
  }

  const handleProfileClick = () => {
    handleCloseNavMenu()
    navigate(`/user/${userLogged.id}`)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={ {
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            } }
          >
            <img src={ companyLogo } alt='company logo' className='nav-logo' />
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left',
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >
              { pages.map((page) => (
                <MenuItem key={ page } onClick={ handleCloseNavMenu }>
                  <Typography textAlign="center">{ page }</Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={ {
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            } }
          >
          </Typography>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
            { pages.map((page) => (
              <Button
                key={ page }
                onClick={ handleCloseNavMenu }
                sx={ { my: 2, color: 'white', display: 'block' } }
              >
                { page }
              </Button>
            )) }
          </Box>

          <Box sx={ { flexGrow: 0 } }>
            <Tooltip title="Open settings">
              <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
                <Avatar alt="L" src={ userLogged?.image } />
              </IconButton>
            </Tooltip>
            <Menu
              sx={ { mt: '45px' } }
              id="menu-appbar"
              anchorEl={ anchorElUser }
              anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              open={ Boolean(anchorElUser) }
              onClose={ handleCloseUserMenu }
            >
              { !userLogged ? <MenuItem key='Login' onClick={ handleLoginClick }>
                <Typography textAlign="center">Login</Typography>
              </MenuItem> : <MenuItem key='Logout' onClick={ handleLogoutClick }>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem> }
              <MenuItem key='Profile' onClick={ handleProfileClick }>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
