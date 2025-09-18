import HowHero from '../components/how/HowHero.jsx';
import ProcessSection from '../components/how/ProcessSection.jsx';
import HighlightsGrid from '../components/how/HighlightsGrid.jsx';
import QuoteCtaSection from '../components/how/QuoteCtaSection.jsx';
import { howItWorksContent } from '../content.js';

function HowItWorks() {
  const { hero, processes, highlight, quote } = howItWorksContent;

  return (
    <>
      <HowHero hero={hero} />
      <ProcessSection processes={processes} />
      <HighlightsGrid highlight={highlight} />
      <QuoteCtaSection quote={quote} />
    </>
  );
}

export default HowItWorks;
