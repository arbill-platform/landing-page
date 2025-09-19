import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import { Telegram, YouTube, Facebook, LinkedIn } from '@mui/icons-material';

const iconMap = {
  Telegram: Telegram,
  YouTube: YouTube,
  Facebook: Facebook,
  LinkedIn: LinkedIn,
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfY3FFaD5bTN9egxIFEi1dhMW-FRDfbYXjT-__sYITknFzAgg/formResponse';
const EMAIL_ENTRY_ID = 'entry.2085717727';

function CommunitySection({ community }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append(EMAIL_ENTRY_ID, email);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" alignItems="center" sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            {community.heading}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 640 }}>
            {community.subheading}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6 }}>
          {community.channels.map(({ title, description, link, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <Grid item size={{xs:12, md:3}} key={title}>
                <Card
                  elevation={0}
                  sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Stack spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {IconComponent && <IconComponent sx={{ fontSize: 32, color: 'primary.main' }} />}
                      </Box>
                      <Typography variant="body2" color="text.secondary" minHeight={80} textAlign="center">
                        {description}
                      </Typography>
                      <Link href={link} underline="hover" target="_blank" rel="noopener" sx={{ fontWeight: 600 }}>
                        {title}
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Stack
          component="form"
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          onSubmit={submitForm}
        >
          <TextField 
            label="Work email" 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            sx={{ width: { xs: '100%', md: 320 } }} 
          />
          <Button 
            variant="contained" 
            size="large" 
            type="submit"
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe to newsletter'}
          </Button>
        </Stack>
        
        {/* Feedback messages */}
        {(isSuccess || error) && (
          <Stack alignItems="center" sx={{ mt: 2 }}>
            {isSuccess && (
              <Alert severity="success" sx={{ maxWidth: 400 }}>
                Successfully subscribed to our newsletter!
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ maxWidth: 400 }}>
                {error}
              </Alert>
            )}
          </Stack>
        )}
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
