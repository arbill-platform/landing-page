import HowHero from '../components/how/HowHero.jsx';
import ProcessSection from '../components/how/ProcessSection.jsx';
import HighlightsGrid from '../components/how/HighlightsGrid.jsx';
import QuoteCtaSection from '../components/how/QuoteCtaSection.jsx';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function HowItWorks() {
  const { howItWorks } = useLocaleContent();
  const { hero, processes, highlight, quote } = howItWorks;

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
