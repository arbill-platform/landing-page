import PropTypes from 'prop-types';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const iconMap = {
  AutoGraph: AutoGraphIcon,
  AssignmentTurnedIn: AssignmentTurnedInIcon,
  HealthAndSafety: HealthAndSafetyIcon,
};

function FeatureGrid({ features, metrics }) {
  return (
    <Box component="section" id="solutions" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main' }}>
              Why teams choose Arbill
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: 560 }}>
              Purpose-built for safety leaders who need visibility and speed
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Connect people, processes, and protection in one platform to prevent incidents before they happen.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {features.map(({ title, description, icon }) => {
              const Icon = iconMap[icon];
              return (
                <Grid item xs={12} md={4} key={title}>
                  <Card
                    elevation={0}
                    sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={2.5}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 3,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'primary.light',
                            color: 'primary.main',
                          }}
                        >
                          <Icon fontSize="medium" />
                        </Box>
                        <Stack spacing={1}>
                          <Typography variant="h5">{title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {description}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {metrics.map(({ value, label }) => (
              <Stack key={label} spacing={1} textAlign={{ xs: 'center', sm: 'left' }}>
                <Typography variant="h3" color="primary.main">
                  {value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 220 }}>
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

FeatureGrid.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['AutoGraph', 'AssignmentTurnedIn', 'HealthAndSafety']).isRequired,
    }),
  ).isRequired,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FeatureGrid;
