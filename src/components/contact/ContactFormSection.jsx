import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

function ContactFormSection({ form }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5} sx={{ height: '100%', justifyContent: 'center' }}>
              <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
                {form.heading}
              </Typography>
              <Typography variant="h3">Let’s get started</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {form.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack component="form" spacing={2.5}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField label="Full name" fullWidth required />
                  <TextField label="Work email" type="email" fullWidth required />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField label="Company" fullWidth />
                  <TextField label="Role" fullWidth />
                </Stack>
                <TextField label="What can we help you solve?" multiline minRows={4} fullWidth />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField label="Preferred meeting date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <TextField label="Phone number" fullWidth />
                </Stack>
                <Button type="submit" variant="contained" size="large">
                  Submit request
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ContactFormSection.propTypes = {
  form: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactFormSection;
