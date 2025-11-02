import { Box, Container, Stack, Typography } from '@mui/material';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function CurePeriod() {
  const { resources } = useLocaleContent();
  const { badge, curePeriod } = resources;
  const introParagraphs = curePeriod.whatParagraphs.slice(0, 2);
  const immediateLead = curePeriod.whatParagraphs[2];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container
        maxWidth="md"
        sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 4, md: 6 }, boxShadow: { md: 3 } }}
      >
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              {badge}
            </Typography>
            <Typography variant="h3" component="h1">
              {curePeriod.title}
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2, p: { xs: 3, md: 4 } }}
          >
            <Typography variant="h6" component="h2">
              {curePeriod.keyTakeawaysHeading}
            </Typography>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {curePeriod.keyTakeaways.map((item, index) => (
                <Typography component="li" key={`takeaway-${index}`} variant="body1" sx={{ color: 'inherit' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2.5}>
            <Typography variant="h6" component="h2">
              {curePeriod.whatHeading}
            </Typography>
            {introParagraphs.map((text, index) => (
              <Typography key={`what-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              {immediateLead}
            </Typography>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {curePeriod.immediateActions.map((item, index) => (
                <Typography component="li" key={`action-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
            {curePeriod.resolutionParagraphs.map((text, index) => (
              <Typography key={`resolution-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" component="h2">
              {curePeriod.exampleHeading}
            </Typography>
            {curePeriod.exampleIntro.map((text, index) => (
              <Typography key={`example-intro-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {curePeriod.exampleOutcomes.map((item, index) => (
                <Typography component="li" key={`example-outcome-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2.5}>
            {curePeriod.whyParagraphs.map((text, index) => (
              <Typography key={`why-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {curePeriod.whyList.map((item, index) => (
                <Typography component="li" key={`why-list-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CurePeriod;
