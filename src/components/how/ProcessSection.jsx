import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProcessColumn({ title, steps }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{title}</Typography>
      <Stack spacing={1.5}>
        {steps.map(({ title: stepTitle, description }) => (
          <Accordion key={stepTitle} disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {stepTitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
}

ProcessColumn.propTypes = {
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function ProcessSection({ processes }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6 }} textAlign={{ xs: 'left', md: 'center' }} alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Typography variant="h3">{processes.heading}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 780 }}>
            {processes.subheading}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <ProcessColumn {...processes.owner} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ProcessColumn {...processes.investor} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ProcessSection.propTypes = {
  processes: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      title: PropTypes.string.isRequired,
      steps: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    investor: PropTypes.shape({
      title: PropTypes.string.isRequired,
      steps: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProcessSection;
