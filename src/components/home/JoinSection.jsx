import PropTypes from 'prop-types';
import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AudienceCard({ title, description, highlights, cta }) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
        <List disablePadding>
          {highlights.map((item) => (
            <ListItem key={item} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <ArrowForwardIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary={item} />
            </ListItem>
          ))}
        </List>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          
            <Button
              key={cta.label}
              // component={RouterLink}
              to={cta.to}
              // variant={index === 0 ? 'contained' : 'outlined'}
              // color="inherit"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                
                color: 'common.white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {cta.label}
            </Button>
            
          </Stack>
      </Stack>
    </Paper>
  );
}

AudienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function JoinSection({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            Who can join
          </Typography>
          <Typography variant="h3">{content.tagline}</Typography>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          }}
        >
          <AudienceCard {...content.owner} />
          <AudienceCard {...content.investor} />
        </Box>
      </Container>
    </Box>
  );
}

JoinSection.propTypes = {
  content: PropTypes.shape({
    tagline: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      cta: PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    }).isRequired,
    investor: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      cta: PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

export default JoinSection;
