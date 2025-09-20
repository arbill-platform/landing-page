import PropTypes from 'prop-types';
import { Box, Container, Stack, Typography } from '@mui/material';

function HowHero({ hero }) {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        minHeight: { xs: 440, md: 520 },
        position: 'relative',
        color: 'common.white',
        backgroundImage: hero.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5} textAlign={{ xs: 'left', md: 'center' }} alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Typography variant="h1" sx={{ maxWidth: 780 }}>
            {hero.title}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
            {hero.subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

HowHero.propTypes = {
  hero: PropTypes.shape({
    kicker: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default HowHero;
