import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';

function AddressBookSection({ addressBook }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            {addressBook.heading}
          </Typography>
          <Typography variant="h3">Direct lines to the Arbill team</Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {addressBook.cards.map((card) => (
            <Grid item xs={12} md={4} key={card.title}>
              <Card
                elevation={0}
                sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: 70 }}>
                      {card.description}
                    </Typography>
                    <Link href={`mailto:${card.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                      {card.email}
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
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
