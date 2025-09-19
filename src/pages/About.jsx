import AboutHero from '../components/about/AboutHero.jsx';
import HighlightsSection from '../components/about/HighlightsSection.jsx';
import StorySection from '../components/about/StorySection.jsx';
import BeliefsSection from '../components/about/BeliefsSection.jsx';
import JourneySection from '../components/about/JourneySection.jsx';
import QuoteSection from '../components/about/QuoteSection.jsx';
import { aboutContent } from '../content.js';

function About() {
  const { hero, highlights, story, beliefs, journey, quote } = aboutContent;

  return (
    <>
      <AboutHero hero={hero} />
      {/* <HighlightsSection highlights={highlights} /> */}
      <StorySection story={story} />
      <BeliefsSection beliefs={beliefs} />
      <JourneySection journey={journey} />
      <QuoteSection quote={quote} />
    </>
  );
}

export default About;
