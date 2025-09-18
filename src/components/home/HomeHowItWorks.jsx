import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

function HomeHowItWorks({ steps }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            How Arbill works
          </Typography>
          <Typography variant="h3">Three steps from alignment to measurable outcomes</Typography>
        </Stack>
        <Grid container spacing={4}>
          {steps.map(({ title, description }, index) => (
            <Grid item xs={12} md={4} key={title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Stack spacing={2.5} alignItems="flex-start">
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
                        fontSize: 18,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
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

HomeHowItWorks.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default HomeHowItWorks;
