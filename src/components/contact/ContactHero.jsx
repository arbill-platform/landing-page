import PropTypes from 'prop-types';
import { Box, Container, Stack, Typography } from '@mui/material';

function ContactHero({ hero }) {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 12, md: 16 },
        position: 'relative',
        color: 'common.white',
        backgroundImage: hero.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: 440, md: 520 },
        }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5} sx={{ maxWidth: 720 }}>          
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, lineHeight: 1.2 }}>
            {hero.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
            {hero.subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

ContactHero.propTypes = {
  hero: PropTypes.shape({
    kicker: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactHero;
