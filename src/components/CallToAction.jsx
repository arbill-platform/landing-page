import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

function CallToAction() {
  return (
    <Box component="section" id="demo" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            backgroundColor: 'primary.main',
            backgroundImage: 'linear-gradient(135deg, rgba(0, 109, 119, 0.95), rgba(6, 214, 160, 0.65))',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography variant="overline" sx={{ letterSpacing: 3, opacity: 0.85 }}>
              Ready to see more?
            </Typography>
            <Typography variant="h2">Let’s build a safer operation together</Typography>
            <Typography variant="body1" sx={{ maxWidth: 520, opacity: 0.9 }}>
              Connect with a certified safety specialist for a tailored walkthrough of Arbill and a roadmap for your
              program.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" color="inherit">
                Schedule a demo
              </Button>
              <Button variant="outlined" size="large" color="inherit">
                Download the playbook
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default CallToAction;
