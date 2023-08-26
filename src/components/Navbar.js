import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'


const links = [
  {name: 'Home', route: '/', id: 1},
  {name: 'About', route: '#About', id: 2},
  {name: 'Projects', route: '#Projects', id: 3},
  {name: 'Contact', route: '#Contact', id: 4}
];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ position: 'sticky', backgroundColor: '#fafafa', width: '100%'}}>
      <Container  >
        <Toolbar disableGutters>
          
            <Typography     
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 10,
                fontFamily: 'inherit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}>
               <Link to='/' > logo</Link>
            </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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

              {links.map((link) => (
                <MenuItem key={link.route} onClick={handleCloseNavMenu}>
                  <Link to={link.route} style={{ textDecoration: 'none', textAlign: 'center'}}>{link.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <Link to='/' > logo</Link>
          </Typography>
          

          {links.map((link ) => (
            <MenuItem key={link.id} onClick={handleCloseNavMenu} sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'flex' },  }}>
              <Link to={link.route} style={{ textDecoration: 'none', textAlign: 'center'}} >{link.name}</Link>
            </MenuItem>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
} 
export default Navbar;