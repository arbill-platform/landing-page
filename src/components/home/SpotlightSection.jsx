import PropTypes from 'prop-types';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function SpotlightSection({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            backgroundColor: 'primary.main',
            backgroundImage: 'linear-gradient(135deg, rgba(0, 109, 119, 0.95), rgba(6, 214, 160, 0.65))',
            color: 'common.white',
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography variant="h3">{content.heading}</Typography>
            <Typography variant="body1" sx={{ maxWidth: 620, opacity: 0.9 }}>
              {content.description}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} to={content.primaryCta.to} variant="contained" size="large" color="inherit" sx={{ color: 'primary.main' }}>
                {content.primaryCta.label}
              </Button>
              <Button component={RouterLink} to={content.secondaryCta.to} variant="outlined" size="large" color="inherit">
                {content.secondaryCta.label}
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

SpotlightSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    secondaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SpotlightSection;
