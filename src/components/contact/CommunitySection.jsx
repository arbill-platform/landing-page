import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, TextField, Typography } from '@mui/material';

function CommunitySection({ community }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" alignItems="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            {community.heading}
          </Typography>
          <Typography variant="h3" sx={{ maxWidth: 640 }}>
            {community.subheading}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6 }}>
          {community.channels.map(({ title, description, link }) => (
            <Grid item xs={12} md={6} key={title}>
              <Card
                elevation={0}
                sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                    <Link href={link} underline="hover" target="_blank" rel="noopener" sx={{ fontWeight: 600 }}>
                      Join {title}
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack
          component="form"
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField label="Work email" type="email" required sx={{ width: { xs: '100%', md: 320 } }} />
          <Button variant="contained" size="large" type="submit">
            Subscribe to newsletter
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

CommunitySection.propTypes = {
  community: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    channels: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default CommunitySection;
