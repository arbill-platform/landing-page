import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const iconMap = {
  Lightbulb: LightbulbIcon,
  FactCheck: FactCheckIcon,
  Diversity3: Diversity3Icon,
  VolunteerActivism: VolunteerActivismIcon,
};

function BeliefsSection({ beliefs }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          }}
        >
          {beliefs.map(({ title, description, icon }) => {
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

BeliefsSection.propTypes = {
  beliefs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['Lightbulb', 'FactCheck', 'Diversity3', 'VolunteerActivism']).isRequired,
    }),
  ).isRequired,
};

export default BeliefsSection;
