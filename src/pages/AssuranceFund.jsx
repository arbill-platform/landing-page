import { Box, Container, Stack, Typography } from '@mui/material';

const introParagraphs = [
  'The Assurance Fund is a protective financial buffer designed to safeguard investors if a project fails.',
  'It works like a safety net - not every project is required to have one, but those that do instantly show higher credibility and responsibility.',
  "When a project owner decides to create an Assurance Fund, a portion of the raised capital (or an additional contribution) is set aside in a separate, ring-fenced pool under Arbill's control. This pool is fully transparent and disclosed on the project page, so investors know exactly how much protection exists before they invest.",
  'If the project succeeds, the Assurance Fund is released back to the project owner as a reward for responsible performance.',
  'If the project fails, the Assurance Fund is automatically distributed to investors based on their individual contribution shares - helping offset losses and maintain trust.',
];

const exampleParagraphs = [
  'Imagine a project raising $100,000 from investors. The project owner chooses to allocate $5,000 (5%) to an Assurance Fund.',
];

const exampleBullets = [
  'If the project succeeds, the $5,000 is returned to the project owner.',
  'If the project fails, Arbill redistributes the $5,000 proportionally among all investors.',
];

const examplePostListParagraphs = [
  'For instance, an investor who contributed $10,000 (10%) would receive $500 from the Assurance Fund.',
];

const closingParagraphs = [
  'This mechanism encourages project owners to commit real collateral and gives investors additional confidence that even in the worst-case scenario, part of their capital is recoverable.',
  'The Assurance Fund, therefore, is more than a feature - it is a trust signal that distinguishes responsible projects on the Arbill Platform.',
];

const keyTakeaways = [
  'Protects investors if a project fails.',
  'Optional but a strong credibility signal for projects.',
  'Funds are ring-fenced, transparent, and automatically distributed.',
  'Encourages responsible, accountable project owners.',
];

function AssuranceFund() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 4, md: 6 }, boxShadow: { md: 3 } }}>
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              Resources
            </Typography>
            <Typography variant="h3" component="h1">
              Assurance Fund
            </Typography>
          </Stack>

          <Stack spacing={2} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2, p: { xs: 3, md: 4 } }}>
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
            {introParagraphs.map((text, index) => (
              <Typography key={`intro-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" component="h2">
              Example
            </Typography>
            {exampleParagraphs.map((text, index) => (
              <Typography key={`example-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
              {exampleBullets.map((item, index) => (
                <Typography component="li" key={`bullet-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
            {examplePostListParagraphs.map((text, index) => (
              <Typography key={`post-${index}`} variant="body1" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={2.5}>
            {closingParagraphs.map((text, index) => (
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
