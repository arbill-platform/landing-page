import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const drawerWidth = 320;

function Navbar({ items }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderNavButton = ({ label, path }) => (
    <Button
      key={label}
      color="inherit"
      component={RouterLink}
      to={path}
      sx={{
        fontWeight: 500,
        color: isActive(path) ? 'primary.main' : 'text.primary',
      }}
    >
      {label}
    </Button>
  );

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'divider', backdropFilter: 'blur(12px)' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: 1 }}>
            <Box
              component="span"
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                bgcolor: 'primary.main',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              A
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
                ARBILL
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Safety Intelligence Platform
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {items.map((item) => renderNavButton(item))}
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="text"
              color="inherit"
              component={RouterLink}
              to="/contact"
              sx={{ color: isActive('/contact') ? 'primary.main' : 'text.primary' }}
            >
              Log in
            </Button>
            <Button variant="contained" component={RouterLink} to="/contact">
              Book a demo
            </Button>
          </Stack>

          <IconButton
            size="large"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            p: 3,
          },
        }}
      >
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Stack spacing={0.5}>
            <Typography variant="subtitle2" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
              ARBILL
            </Typography>
            <Typography variant="h5">Safety Intelligence Platform</Typography>
          </Stack>
          <Divider />
          <List sx={{ flex: 1 }}>
            {items.map(({ label, path }) => (
              <ListItem key={label} disableGutters sx={{ py: 1 }}>
                <Button
                  fullWidth
                  color="inherit"
                  component={RouterLink}
                  to={path}
                  onClick={closeDrawer}
                  sx={{
                    justifyContent: 'flex-start',
                    color: isActive(path) ? 'primary.main' : 'text.primary',
                  }}
                >
                  {label}
                </Button>
              </ListItem>
            ))}
          </List>
          <Stack spacing={1.5}>
            <Button variant="contained" size="large" component={RouterLink} to="/contact" onClick={closeDrawer}>
              Book a demo
            </Button>
            <Button
              variant="text"
              color="inherit"
              component={RouterLink}
              to="/contact"
              onClick={closeDrawer}
              sx={{ color: isActive('/contact') ? 'primary.main' : 'text.primary' }}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </AppBar>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
