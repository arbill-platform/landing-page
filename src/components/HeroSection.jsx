import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function HeroSection({ content }) {
  return (
    <Box component="section" id="product" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3.5}>
              <Chip label={content.kicker} color="primary" variant="outlined" sx={{ alignSelf: 'flex-start' }} />
              <Typography variant="h1">{content.headline}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
                {content.description}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button size="large" variant="contained" href={content.primaryAction.href} endIcon={<ArrowForwardIcon />}>
                  {content.primaryAction.label}
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  color="inherit"
                  href={content.secondaryAction.href}
                  startIcon={<PlayCircleIcon />}
                >
                  {content.secondaryAction.label}
                </Button>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    boxShadow: '0 0 0 6px rgba(46, 204, 113, 0.2)',
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {content.highlight}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                backgroundColor: 'primary.main',
                backgroundImage: 'linear-gradient(135deg, rgba(14, 148, 140, 0.95), rgba(131, 197, 190, 0.85))',
                color: 'common.white',
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h6" sx={{ opacity: 0.8 }}>
                  Real-time dashboard
                </Typography>
                <Typography variant="h3">Safety Command Center</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Monitor incident trends, open actions, and PPE utilization across every site.
                </Typography>
                <Stack spacing={2}>
                  {["Predictive incident scoring", 'Automated compliance reports', 'Live PPE stock levels'].map((item) => (
                    <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: 'common.white',
                        }}
                      />
                      <Typography variant="body2">{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

HeroSection.propTypes = {
  content: PropTypes.shape({
    kicker: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    secondaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    highlight: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroSection;
