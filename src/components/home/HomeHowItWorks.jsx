import PropTypes from 'prop-types';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';

function HomeHowItWorks({ content }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            How Arbill works
          </Typography>
          <Typography variant="h3">{content.tagline}</Typography>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
          }}
        >          
          {content.steps.map(({ title, description }, index) => (
            <Card
              key={title}
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Stack spacing={2.5} alignItems="flex-start">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 3,
                        bgcolor: 'primary.light',
                        color: 'common.white',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography variant="h5">{title}</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

HomeHowItWorks.propTypes = {
  content: PropTypes.shape({    
    tagline: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default HomeHowItWorks;
