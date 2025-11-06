import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import AssuranceFund from './pages/AssuranceFund.jsx';
import CurePeriod from './pages/CurePeriod.jsx';
import NotFound from './pages/NotFound.jsx';
import { LocaleProvider, useLocale, useLocaleContent } from './i18n/LocaleProvider.jsx';

function AppShell() {
  const content = useLocaleContent();
  const { locale, setLocale, supportedLocales, localeLabels } = useLocale();

  return (
    <BrowserRouter>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar
          items={content.navigationItems}
          content={content.navbar}
          locale={locale}
          supportedLocales={supportedLocales}
          localeLabels={localeLabels}
          onLocaleChange={setLocale}
        />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/resources/terms/assurance-fund.html" element={<AssuranceFund />} />
            <Route path="/resources/terms/cure-period.html" element={<CurePeriod />} />            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer content={content.footer} />
      </Box>
    </BrowserRouter>
  );
}

function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  );
}

export default App;
