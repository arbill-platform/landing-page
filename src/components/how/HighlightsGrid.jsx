import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import LanIcon from '@mui/icons-material/Lan';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import HubIcon from '@mui/icons-material/Hub';
import HandshakeIcon from '@mui/icons-material/Handshake';

const iconMap = {
  Lan: LanIcon,
  ManageHistory: ManageHistoryIcon,
  Hub: HubIcon,
  Handshake: HandshakeIcon,
};

function HighlightsGrid({ highlight }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign={{ xs: 'left', md: 'center' }} alignItems={{ xs: 'flex-start', md: 'center' }} sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            {highlight.heading}
          </Typography>
          <Typography variant="h3" sx={{ maxWidth: 760 }}>
            {highlight.subheading}
          </Typography>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          }}
        >
          {highlight.pillars.map(({ title, description, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <Card
                key={title}
                elevation={0}
                sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2.5}>
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
                      }}
                    >
                      {IconComponent && <IconComponent fontSize="medium" />}
                    </Box>
                    <Stack spacing={1}>
                      <Typography variant="h5">{title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

HighlightsGrid.propTypes = {
  highlight: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    pillars: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.oneOf(['Lan', 'ManageHistory', 'Hub', 'Handshake']).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default HighlightsGrid;
