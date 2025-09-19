import PropTypes from 'prop-types';
import { Box, Container, Stack, Typography } from '@mui/material';
import Markdown from 'react-markdown';


function StorySection({ story }) {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
            Our Story
          </Typography>
          
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 8 },
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, 0.9fr)' },
            alignItems: 'center',
          }}
        >
        
          <Stack>
            {story.paragraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>                 
                <Markdown>{paragraph}</Markdown>
              </Typography>
            ))}
          </Stack>            
          
          <Box
            sx={{
              width: '100%',
              minHeight: { xs: 300, md: 420 },
              borderRadius: 5,
              backgroundImage: story.image,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 35px 70px rgba(15, 23, 42, 0.18)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

StorySection.propTypes = {
  story: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,    
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default StorySection;
