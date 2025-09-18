import PropTypes from 'prop-types';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

function QuoteSection({ quote }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
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
          <Stack spacing={3} alignItems="center">
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              Our promise
            </Typography>
            <Typography variant="h3" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
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
        </Paper>
      </Container>
    </Box>
  );
}

QuoteSection.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuoteSection;
