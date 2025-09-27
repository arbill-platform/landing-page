import { Box, Container, Stack, Typography } from '@mui/material';
import { termsContent } from '../content.js';

const renderParagraphs = (items = [], { keyPrefix, variant = 'body1' }) =>
  items.map((text, index) => (
    <Typography key={`${keyPrefix}-${index}`} variant={variant} sx={{ color: 'text.secondary' }}>
      {text}
    </Typography>
  ));

const renderList = (items = [], keyPrefix) =>
  items.length > 0 ? (
    <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 3 }}>
      {items.map((item, index) => (
        <Typography component="li" key={`${keyPrefix}-${index}`} variant="body1" sx={{ color: 'text.secondary' }}>
          {item}
        </Typography>
      ))}
    </Stack>
  ) : null;

function Terms() {
  const { hero, sections, contact } = termsContent;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Stack spacing={{ xs: 6, md: 8 }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main' }}>
              Legal
            </Typography>
            <Typography variant="h3" component="h1">
              {hero.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {hero.description}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Last updated: {hero.lastUpdated}
            </Typography>
          </Stack>

          <Stack spacing={{ xs: 5, md: 7 }}>
            {sections.map((section) => (
              <Stack key={section.title} spacing={2.5}>
                <Typography variant="h6" component="h2">
                  {section.title}
                </Typography>
                {renderParagraphs(section.paragraphs, {
                  keyPrefix: `${section.title}-paragraph`,
                })}
                {renderList(section.list, `${section.title}-list`)}
                {renderParagraphs(section.postListParagraphs, {
                  keyPrefix: `${section.title}-postlist`,
                })}
                {section.subsections?.map((subsection) => (
                  <Stack key={subsection.title} spacing={1.5} sx={{ mt: 1 }}>
                    <Typography variant="subtitle1" component="h3">
                      {subsection.title}
                    </Typography>
                    {renderParagraphs(subsection.paragraphs, {
                      keyPrefix: `${section.title}-${subsection.title}-paragraph`,
                    })}
                    {renderList(
                      subsection.list,
                      `${section.title}-${subsection.title}-list`,
                    )}
                    {renderParagraphs(subsection.postListParagraphs, {
                      keyPrefix: `${section.title}-${subsection.title}-postlist`,
                    })}
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>

          <Stack spacing={1.5} sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 4 }}>
            <Typography variant="subtitle1">{contact.heading}</Typography>
            {renderParagraphs([contact.description], {
              keyPrefix: 'contact-description',
              variant: 'body2',
            })}
            {renderParagraphs(contact.postListParagraphs, {
              keyPrefix: 'contact-postlist',
              variant: 'body2',
            })}
            {renderList(contact.list, 'contact-list')}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Terms;
