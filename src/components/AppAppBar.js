import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import AuthContext from '../context/AuthContext';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const token = localStorage.getItem("authTokens");

  const location = useLocation();
  const isActiveLink = (path) => location.pathname === path;

  const { logoutUser } = React.useContext(AuthContext);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link className="navbar-brand p-5 fw-bold" to="/">AcadamicFolio</Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  component={Link}
                  to="/"
                  sx={{
                    color: isActiveLink('/') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/blogs"
                  sx={{
                    color: isActiveLink('/blogs') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Blogs
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/tutorials"
                  sx={{
                    color: isActiveLink('/tutorials') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Tutorials
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/shorts"
                  sx={{
                    color: isActiveLink('/shorts') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Shorts
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/code"
                  sx={{
                    color: isActiveLink('/code') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Code Snippets
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/contact"
                  sx={{
                    color: isActiveLink('/contact') ? 'primary.main' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">
                    Contact
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              {token ? (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
                    to="/dashboard"
                  >
                    Dashboard
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={logoutUser}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
                    to="/signin"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/signup"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem
                    component={Link}
                    to="/"
                    sx={{
                      color: isActiveLink('/') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/blogs"
                    sx={{
                      color: isActiveLink('/blogs') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Blogs
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/tutorials"
                    sx={{
                      color: isActiveLink('/tutorials') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Tutorials
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/shorts"
                    sx={{
                      color: isActiveLink('/shorts') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Shorts
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/code"
                    sx={{
                      color: isActiveLink('/code') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Code snippets
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/contact"
                    sx={{
                      color: isActiveLink('/contact') ? 'primary.main' : 'text.primary',
                    }}
                  >
                    Contact
                  </MenuItem>
                  <Divider />
                  {token ? (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/dashboard"
                        sx={{ width: '100%' }}
                      >
                        Dashboard
                      </Button>
                    </MenuItem>
                  ) : (
                    <>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          component={Link}
                          to="/signup"
                          sx={{ width: '100%' }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          component={Link}
                          to="/signin"
                          sx={{ width: '100%' }}
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    </>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
