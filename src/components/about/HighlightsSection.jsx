import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import BorderClear from '@mui/icons-material/BorderClear';
import Public from '@mui/icons-material/Public';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const iconMap = {
  Flag: OutlinedFlagIcon,
  BorderClear: BorderClear,
  Global: Public,
  Sustainability: AllInclusiveIcon,
};

function HighlightsSection({ highlights }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            Highlights
          </Typography>          
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            '& > *': { flex: 1 },
            '& .MuiCard-root': {
              height: '100%',
              display: 'flex',
            },
            '& .MuiCardContent-root': {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            },
          }}
        >
          {highlights.map(({ title, description, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <Card
                key={title}
                elevation={0}
                sx={{
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2.5}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: 'primary.light',
                        color: 'white',
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
        </Stack>
      </Container>
    </Box>
  );
}

HighlightsSection.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['SafetyCheck', 'Handshake', 'Insights', 'AutoGraph']).isRequired,
    }),
  ).isRequired,
};

export default HighlightsSection;
