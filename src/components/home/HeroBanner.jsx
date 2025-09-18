import PropTypes from 'prop-types';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function HeroBanner({ hero }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        color: 'common.white',
        backgroundImage: hero.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: 520, md: 640 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(10, 21, 40, 0.35)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 12, md: 16 } }}>
        <Stack spacing={4} sx={{ maxWidth: 640 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, fontSize: 14, opacity: 0.9 }}>
            Partner with confidence
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.75rem', md: '3.6rem' }, fontWeight: 700, lineHeight: 1.1 }}>
            {hero.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.92 }}>
            {hero.subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {hero.ctas.map(({ label, to }, index) => (
              <Button
                key={label}
                component={RouterLink}
                to={to}
                variant={index === 0 ? 'contained' : 'outlined'}
                color="inherit"
                size="large"
                sx={{
                  bgcolor: index === 0 ? 'common.white' : 'transparent',
                  color: index === 0 ? 'primary.main' : 'common.white',
                  '&:hover': {
                    bgcolor: index === 0 ? 'grey.100' : 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

HeroBanner.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    ctas: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default HeroBanner;
