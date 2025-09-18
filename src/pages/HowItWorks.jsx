import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import SolutionSpotlight from '../components/SolutionSpotlight.jsx';
import FAQSection from '../components/FAQSection.jsx';
import { howItWorksSteps, solutionHighlights, faqs } from '../content.js';

function HowItWorks() {
  return (
    <Box component="div" sx={{ bgcolor: 'background.default' }}>
      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
              How it works
            </Typography>
            <Typography variant="h2">From assessment to measurable impact</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, mx: 'auto' }}>
              Our team guides you through a proven implementation path that blends technology, training, and continuous
              insights.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {howItWorksSteps.map(({ title, description }, index) => (
              <Grid item xs={12} md={6} key={title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Stack spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <SolutionSpotlight highlights={solutionHighlights} />
      <FAQSection faqs={faqs} />
    </Box>
  );
}

export default HowItWorks;
