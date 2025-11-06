import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function NotFound() {
  const navigate = useNavigate();
  const content = useLocaleContent();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        textAlign="center"
        gap={3}
      >
        <Typography variant="h1" component="h1" fontSize="6rem" fontWeight="bold" color="primary">
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="500px">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleGoHome}
          sx={{ mt: 2 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
