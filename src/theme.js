import { createTheme } from '@mui/material/styles';

const primaryColor = '#006D77';
const secondaryColor = '#83C5BE';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: '#F7FBFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1B1B1F',
      secondary: '#46505A',
    },
  },
  typography: {
    h1: {
      fontSize: '3.25rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingInline: '1.75rem',
          paddingBlock: '0.85rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
        },
      },
    },
  },
});

export default theme;
