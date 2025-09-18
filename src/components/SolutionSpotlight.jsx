import PropTypes from 'prop-types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function SolutionSpotlight({ highlights }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main' }}>
            Connected experiences
          </Typography>
          <Typography variant="h2">Deliver the right information where work happens</Typography>
          <Typography variant="body1" color="text.secondary">
            Empower teams in the field and in the office with a single source of truth for every safety workflow.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {highlights.map(({ title, points, imageAlt }) => (
            <Grid item xs={12} md={6} key={title}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Stack spacing={3} alignItems="flex-start">
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      borderRadius: 3,
                      bgcolor: 'grey.100',
                      backgroundImage:
                        'linear-gradient(135deg, rgba(0, 109, 119, 0.1) 0%, rgba(131, 197, 190, 0.25) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  >
                    {imageAlt}
                  </Box>
                  <Stack spacing={2} alignItems="flex-start">
                    <Typography variant="h4">{title}</Typography>
                    <Stack spacing={1.5}>
                      {points.map((point) => (
                        <Stack key={point} direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: '2px' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                            {point}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

SolutionSpotlight.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
      imageAlt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SolutionSpotlight;
