import AboutHero from '../components/about/AboutHero.jsx';
import StorySection from '../components/about/StorySection.jsx';
import BeliefsSection from '../components/about/BeliefsSection.jsx';
import JourneySection from '../components/about/JourneySection.jsx';
import QuoteSection from '../components/about/QuoteSection.jsx';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function About() {
  const { about } = useLocaleContent();
  const { hero, story, beliefs, journey, quote } = about;

  return (
    <>
      <AboutHero hero={hero} />
      <StorySection story={story} />
      <BeliefsSection beliefs={beliefs} />
      <JourneySection journey={journey} />
      <QuoteSection quote={quote} />
    </>
  );
}

export default About;
