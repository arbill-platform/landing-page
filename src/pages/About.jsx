import { Box, Container, Grid, Paper, Stack, Typography, Divider } from '@mui/material';
import { aboutContent, metrics } from '../content.js';

function About() {
  const { mission, story, values, timeline } = aboutContent;

  return (
    <Box component="div" sx={{ bgcolor: 'background.default' }}>
      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
              About Arbill
            </Typography>
            <Typography variant="h2">Powering safer, smarter operations</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, mx: 'auto' }}>
              {mission}
            </Typography>
          </Stack>

          <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 5, border: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={3}>
              <Typography variant="h4">Our story</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {story}
              </Typography>
              <Grid container spacing={4}>
                {metrics.map((metric) => (
                  <Grid item xs={12} md={4} key={metric.label}>
                    <Stack spacing={1} textAlign={{ xs: 'center', md: 'left' }}>
                      <Typography variant="h3" color="primary.main">
                        {metric.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {metric.label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {values.map(({ title, description }) => (
              <Grid item xs={12} md={4} key={title}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Stack spacing={2}>
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

      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Typography variant="h3" textAlign="center">
              A legacy of safety leadership
            </Typography>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Stack spacing={3}>
                {timeline.map(({ year, milestone }, index) => (
                  <Stack key={year} spacing={1.5}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="h5" color="primary.main" sx={{ width: 80 }}>
                        {year}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {milestone}
                      </Typography>
                    </Stack>
                    {index !== timeline.length - 1 && <Divider />}
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
