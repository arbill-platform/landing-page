import PropTypes from 'prop-types';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';

function JourneySection({ journey }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography variant="h3" textAlign="center">Our journey</Typography>
          <Stack spacing={4}>
            {journey.map(({ year, milestone }, index) => (
              <Stack key={year} spacing={1.5}>
                <Stack direction="row" spacing={3} alignItems="flex-start">
                  <Typography
                    variant="h5"
                    color="primary.main"
                    sx={{ minWidth: 80, fontWeight: 700 }}
                  >
                    {year}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {milestone}
                  </Typography>
                </Stack>
                {index !== journey.length - 1 && <Divider />}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

JourneySection.propTypes = {
  journey: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      milestone: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default JourneySection;
