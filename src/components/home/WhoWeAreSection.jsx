import PropTypes from 'prop-types';
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function WhoWeAreSection({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 8 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            alignItems: 'center',
          }}
        >
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
        </Box>
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
