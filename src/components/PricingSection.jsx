import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

function PricingSection({ plans }) {
  return (
    <Box component="section" id="pricing" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main' }}>
            Pricing
          </Typography>
          <Typography variant="h2">Choose the plan built for your safety goals</Typography>
          <Typography variant="body1" color="text.secondary">
            Transparent packages with the flexibility to scale from one facility to global deployments.
          </Typography>
        </Stack>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <Card
                elevation={plan.highlighted ? 12 : 0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: plan.highlighted ? 'none' : '1px solid',
                  borderColor: plan.highlighted ? 'transparent' : 'divider',
                  transform: plan.highlighted ? 'translateY(-12px)' : 'none',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3} alignItems="flex-start">
                    <Stack spacing={1} alignItems="flex-start">
                      <Typography variant="subtitle2" color="primary">
                        {plan.highlighted ? 'Most Popular' : 'Get started'}
                      </Typography>
                      <Typography variant="h4">{plan.name}</Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="h3">{plan.price}</Typography>
                      {plan.cadence && (
                        <Typography variant="body2" color="text.secondary">
                          {plan.cadence}
                        </Typography>
                      )}
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {plan.description}
                    </Typography>
                    <Stack spacing={1.5}>
                      {plan.features.map((feature) => (
                        <Stack key={feature} direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckIcon color="primary" sx={{ mt: '2px' }} />
                          <Typography variant="body2" sx={{ textAlign: 'left' }}>
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 4, pb: 4 }}>
                  <Button
                    fullWidth
                    size="large"
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    color={plan.highlighted ? 'primary' : 'inherit'}
                    href="#demo"
                  >
                    Talk with sales
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

PricingSection.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      cadence: PropTypes.string,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      highlighted: PropTypes.bool,
    }),
  ).isRequired,
};

export default PricingSection;
