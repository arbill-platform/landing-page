import PropTypes from 'prop-types';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

function TestimonialsSection({ items }) {
  return (
    <Box component="section" id="resources" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main' }}>
            Customer stories
          </Typography>
          <Typography variant="h2">Safety outcomes you can measure</Typography>
          <Typography variant="body1" color="text.secondary">
            Hear from teams who use Arbill to transform their safety programs.
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {items.map(({ quote, name, role }) => (
            <Grid item xs={12} md={6} key={name}>
              <Card
                elevation={0}
                sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={3}>
                    <FormatQuoteIcon color="primary" fontSize="large" />
                    <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                      “{quote}”
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {role}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

TestimonialsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TestimonialsSection;
