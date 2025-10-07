import { Box, Container, Stack, Typography } from '@mui/material';

const keyTakeaways = [
  'A grace window for project owners to fix shortfalls.',
  'Prevents immediate default when payments are delayed.',
  'Protects investors through fund freeze and control.',
  'Balances fairness with strict accountability.',
];

const whatParagraphs = [
  'The Cure Period is a short, predefined grace window that allows project owners to correct payment or balance shortfalls before the system declares a default.',
  'It reflects Arbill’s commitment to fairness and transparency, giving responsible projects the chance to recover while ensuring investor protection remains intact.',
];

const immediateActions = [
  'Freezes all new fund releases, and',
  'Activates the Cure Period (for example, a 7-day window).',
];

const resolutionParagraphs = [
  'During this time, the project owner must deposit the missing amount to restore full balance.',
  'If the issue is cured within the window, the project continues as normal; otherwise, it transitions into default and recovery mode.',
];

const exampleIntro = [
  'Suppose a project owes investors $2,000 in interest but only has $1,200 available. Arbill freezes all new disbursements and starts a 7-day Cure Period.',
];

const exampleOutcomes = [
  'If the project owner deposits the missing $800 within 7 days → The project resumes normally.',
  'If not → The system automatically marks the project as defaulted, refunds undisbursed funds to investors, and activates Assurance Fund payouts (if applicable).',
];

const whyParagraphs = [
  'The Cure Period ensures that:',
];

const whyList = [
  'Investors are protected from unexpected defaults,',
  'Project owners get a fair, structured chance to resolve short-term problems, and',
  'Arbill maintains a transparent, disciplined investment environment where accountability and trust coexist.',
];

function CurePeriod() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container
        maxWidth="md"
        sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 4, md: 6 }, boxShadow: { md: 3 } }}
      >
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              Resources
            </Typography>
            <Typography variant="h3" component="h1">
              Cure Period
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2, p: { xs: 3, md: 4 } }}
          >
            <Typography variant="h6" component="h2">
              Key Takeaways
            </Typography>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {keyTakeaways.map((item, index) => (
                <Typography component="li" key={`takeaway-${index}`} variant="body1" sx={{ color: 'inherit' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2.5}>
            <Typography variant="h6" component="h2">
              What Is the Cure Period?
            </Typography>
            {whatParagraphs.map((text, index) => (
              <Typography key={`what-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              When a project misses an interest payment or its operating balance falls below the required level, Arbill immediately:
            </Typography>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {immediateActions.map((item, index) => (
                <Typography component="li" key={`action-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
            {resolutionParagraphs.map((text, index) => (
              <Typography key={`resolution-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" component="h2">
              Example
            </Typography>
            {exampleIntro.map((text, index) => (
              <Typography key={`example-intro-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {exampleOutcomes.map((item, index) => (
                <Typography component="li" key={`example-outcome-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2.5}>
            {whyParagraphs.map((text, index) => (
              <Typography key={`why-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {whyList.map((item, index) => (
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
