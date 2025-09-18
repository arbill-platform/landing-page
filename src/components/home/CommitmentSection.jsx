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

function CommitmentSection({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
                {content.heading}
              </Typography>
              <Stack spacing={2}>
                {content.values.map(({ title, description }) => (
                  <Accordion key={title} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {content.narrative.map((paragraph, index) => (
                <Typography key={index} variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

CommitmentSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
    narrative: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CommitmentSection;
