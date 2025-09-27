import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';

const footerLinks = {
  Product: [
    { label: 'Platform overview', link: '#' },
    { label: 'Mobile app', link: '#' },    
    { label: 'Terms & Conditions', link: '/terms' },
    { label: 'Privacy Policy', link: '/privacy' }
  ],
  Company: [
    { label: 'About', link: '#' },
    { label: 'Careers', link: '#' },
    { label: 'Partners', link: '#' },
    { label: 'News', link: '#' }
  ],
  Resources: [
    { label: 'Guides', link: '#' },
    { label: 'Investment Academy', link: '#' },
    { label: 'Events', link: '#' },
    { label: 'Support', link: '#' }
  ],
};

function Footer() {
  return (
    <Box component="footer" sx={{ py: 8, bgcolor: '#121212', color: 'grey.100' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box component="img" src={logo} alt="Arbill Logo" sx={{ maxWidth: 200 }} />

              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Building Prestige Through Responsible Investment.
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                © {new Date().getFullYear()} Arbill Platform. All rights reserved.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {Object.entries(footerLinks).map(([section, links]) => (
                <Grid item xs={12} sm={4} key={section}>
                  <Stack spacing={2} alignItems="flex-start">
                    <Typography variant="subtitle2" sx={{ color: 'grey.300', letterSpacing: 2 }}>
                      {section}
                    </Typography>
                    <Stack spacing={1.5}>
                      {links.map(({ label, link }) => (
                        <Link
                          key={label}
                          component={RouterLink}
                          to={link}
                          underline="none"
                          sx={{
                            color: 'grey.400',
                            '&:hover': { color: 'primary.main' },
                            transition: 'color 0.3s',
                          }}
                        >
                          {label}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
