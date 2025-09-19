import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Language, BusinessCenter, SupervisorAccount } from '@mui/icons-material';

const iconMap = {
  Global: Language,
  Briefcase: BusinessCenter,
  Team: SupervisorAccount,
}

function AddressBookSection({ addressBook }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" color='primary.main'>{addressBook.heading}</Typography>
          <Typography variant="body1" color="text.secondary">
            {addressBook.subheading}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {addressBook.cards.map((card) => {
            const IconComponent = iconMap[card.icon];
            return (
              <Grid item size={{xs:12, md:4}} key={card.title}>
              <Card
                elevation={0}
                sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', height: '100%' }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5">{card.title}</Typography>
                  <Box sx={{ color: 'primary.main' }}>
                    {IconComponent && <IconComponent />}
                  </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40 }}>
                  {card.description}
                  </Typography>
                  <Link href={`mailto:${card.email}`} align='center' underline="hover" sx={{ fontWeight: 600 }}>
                  {card.email}
                  </Link>
                </Stack>
                </CardContent>
              </Card>
              </Grid>
            )}
          )}
        </Grid>
      </Container>
    </Box>
  );
}

AddressBookSection.propTypes = {
  addressBook: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default AddressBookSection;
