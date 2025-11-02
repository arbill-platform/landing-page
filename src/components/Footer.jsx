import PropTypes from 'prop-types';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';

function Footer({ content }) {
  const legalNotice = content.legalNotice.replace('{year}', new Date().getFullYear());

  return (
    <Box component="footer" sx={{ py: 8, bgcolor: '#121212', color: 'grey.100' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box component="img" src={logo} alt={`${content.brand} Logo`} sx={{ maxWidth: 200 }} />

              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                {content.tagline}
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {legalNotice}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {Object.values(content.sections).map(({ title, links }) => (
                <Grid item xs={12} sm={4} key={title}>
                  <Stack spacing={2} alignItems="flex-start">
                    <Typography variant="subtitle2" sx={{ color: 'grey.300', letterSpacing: 2 }}>
                      {title}
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

Footer.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    legalNotice: PropTypes.string.isRequired,
    sections: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Footer;
