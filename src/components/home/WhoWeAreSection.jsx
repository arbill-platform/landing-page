import PropTypes from 'prop-types';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function WhoWeAreSection({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
                {content.heading}
              </Typography>
              <Typography variant="h3">{content.tagline}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {content.description}
              </Typography>
              <List disablePadding>
                {content.bullets.map((bullet) => (
                  <ListItem key={bullet} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ variant: 'body2', color: 'text.primary' }} primary={bullet} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                minHeight: { xs: 280, md: 360 },
                borderRadius: 4,
                backgroundImage: content.image,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 30px 60px rgba(15, 23, 42, 0.18)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

WhoWeAreSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default WhoWeAreSection;
