import PropTypes from 'prop-types';
import { Box, Container, Stack, Typography } from '@mui/material';

function AboutHero({ hero }) {
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
        minHeight: { xs: 440, md: 520 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(12, 23, 44, 0.35)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
        <Stack spacing={2} sx={{ maxWidth: 720 }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, opacity: 0.85 }}>
            {hero.kicker}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', md: '3.4rem' }, fontWeight: 700, lineHeight: 1.2 }}
          >
            {hero.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.9, opacity: 0.94 }}>
            {hero.subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

AboutHero.propTypes = {
  hero: PropTypes.shape({
    kicker: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutHero;
