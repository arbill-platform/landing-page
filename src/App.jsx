import { Box } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import SolutionSpotlight from './components/SolutionSpotlight.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
import {
  navigationItems,
  heroContent,
  featureCards,
  metrics,
  solutionHighlights,
  testimonials,
  pricingPlans,
  faqs,
} from './content.js';

function App() {
  return (
    <Box>
      <Navbar items={navigationItems} />
      <main>
        <HeroSection content={heroContent} />
        <FeatureGrid features={featureCards} metrics={metrics} />
        <SolutionSpotlight highlights={solutionHighlights} />
        <TestimonialsSection items={testimonials} />
        <PricingSection plans={pricingPlans} />
        <FAQSection faqs={faqs} />
        <CallToAction />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
