import PropTypes from 'prop-types';
import { Box, Button, Container, Paper, Stack, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function QuoteCtaSection({ quote }) {
  return (
    <Box component="section" sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            border: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Grid container>
            <Grid size={{sm:12, md:8}}>
              <Stack spacing={3} alignItems="center">
                <Typography variant="h5" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                  “{quote.text}”
                </Typography>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {quote.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {quote.role}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{sm: 12, md:4}}>
                <Stack direction={{ xs: 'row', sm: 'column' }} marginTop={{xs: 5, md: 0}} spacing={2}>
                  {quote.ctas.map(({ label, to }, index) => (
                    <Button
                    key={label}
                    variant={index === 0 ? 'contained' : 'outlined'}
                    size="large"
                    component={RouterLink}
                    to={to}
                    >
                      {label}
                    </Button>
                  ))}
                </Stack>
              </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

QuoteCtaSection.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    ctas: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default QuoteCtaSection;
