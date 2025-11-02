import PropTypes from 'prop-types';
import { Box, Container, Divider, Stack, Typography, Card, CardContent } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function JourneySection({ journey }) {
  const { heading, items } = journey;

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            {heading}
          </Typography>          
        </Stack>
        <Stack spacing={4}>          
          <Stack spacing={4}>
            <Timeline position="alternate-reverse">                      
              {items.map(({ year, milestone }) => (
                <TimelineItem key={year}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {milestone}
                        </Typography>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>              
              ))}
            </Timeline>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

JourneySection.propTypes = {
  journey: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.string.isRequired,
        milestone: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default JourneySection;
