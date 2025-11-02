import { Box, Container, Stack, Typography } from '@mui/material';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function AssuranceFund() {
  const { resources } = useLocaleContent();
  const { badge, assuranceFund } = resources;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 4, md: 6 }, boxShadow: { md: 3 } }}>
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              {badge}
            </Typography>
            <Typography variant="h3" component="h1">
              {assuranceFund.title}
            </Typography>
          </Stack>

          <Stack spacing={2} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2, p: { xs: 3, md: 4 } }}>
            <Typography variant="h6" component="h2">
              {assuranceFund.keyTakeawaysHeading}
            </Typography>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {assuranceFund.keyTakeaways.map((item, index) => (
                <Typography component="li" key={`takeaway-${index}`} variant="body1" sx={{ color: 'inherit' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2.5}>
            {assuranceFund.intro.map((text, index) => (
              <Typography key={`intro-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" component="h2">
              {assuranceFund.exampleHeading}
            </Typography>
            {assuranceFund.exampleParagraphs.map((text, index) => (
              <Typography key={`example-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {assuranceFund.exampleBullets.map((item, index) => (
                <Typography component="li" key={`bullet-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
            {assuranceFund.examplePostListParagraphs.map((text, index) => (
              <Typography key={`post-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={2.5}>
            {assuranceFund.closing.map((text, index) => (
              <Typography key={`closing-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default AssuranceFund;
