import { Box, Typography, Container } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Register() {
    const location = useLocation();
    const regsiterLink = 'https://arbill.vv0lll.com/register'

    useEffect(() => {
      const queryParams = location.search;
      window.location.href = `https://arbill.vv0lll.com/register${queryParams}`;
    }, [location.search]);

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
        <Typography variant="h4" component="h2" gutterBottom>
          Redirecting...
        </Typography>
        
      </Box>
    </Container>
    );
}

export default Register;
