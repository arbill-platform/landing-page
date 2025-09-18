import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

function ContactSection({ details }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
                  Contact us
                </Typography>
                <Typography variant="h3">Talk with a safety specialist</Typography>
                <Typography variant="body1" color="text.secondary">
                  Share a few details about your safety goals and we’ll tailor a walkthrough of the Arbill platform for
                  your team.
                </Typography>
                <Stack spacing={2}>
                  <TextField label="Full name" required fullWidth />
                  <TextField label="Work email" type="email" required fullWidth />
                  <TextField label="Company" fullWidth />
                  <TextField label="Number of sites" fullWidth />
                  <TextField label="What can we help you solve?" multiline rows={4} fullWidth />
                </Stack>
                <Button variant="contained" size="large" endIcon={<SendIcon />}>Submit request</Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Stack spacing={3}>
                  <Typography variant="h5">Reach us directly</Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <PhoneInTalkIcon color="primary" />
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Call</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {details.phone}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <EmailIcon color="primary" />
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Email</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {details.email}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <PlaceIcon color="primary" />
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Office</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {details.address}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <AccessTimeIcon color="primary" />
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Hours</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {details.officeHours}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'primary.main',
                  backgroundImage: 'linear-gradient(135deg, rgba(0, 109, 119, 0.95), rgba(131, 197, 190, 0.75))',
                  color: 'common.white',
                }}
              >
                <Stack spacing={2}>
                  <Typography variant="h6">Response time</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {details.responseTime}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    A member of our certified safety advisory team will coordinate your kickoff call and share a
                    custom-fit roadmap.
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ContactSection.propTypes = {
  details: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    responseTime: PropTypes.string.isRequired,
    officeHours: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactSection;
