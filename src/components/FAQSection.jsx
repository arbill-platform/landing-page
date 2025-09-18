import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQSection({ faqs }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Stack spacing={4} textAlign="center">
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main' }}>
              FAQs
            </Typography>
            <Typography variant="h2">Answers for safety leaders</Typography>
            <Typography variant="body1" color="text.secondary">
              Still have a question? Reach out and we’ll connect you with a safety advisor within 24 hours.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            {faqs.map(({ question, answer }) => (
              <Accordion key={question} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary" textAlign="left">
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FAQSection;
