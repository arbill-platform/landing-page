import HeroBanner from '../components/home/HeroBanner.jsx';
import WhoWeAreSection from '../components/home/WhoWeAreSection.jsx';
import HomeHowItWorks from '../components/home/HomeHowItWorks.jsx';
import JoinSection from '../components/home/JoinSection.jsx';
import CommitmentSection from '../components/home/CommitmentSection.jsx';
import SpotlightSection from '../components/home/SpotlightSection.jsx';
import { useLocaleContent } from '../i18n/LocaleProvider.jsx';

function Home() {
  const { home } = useLocaleContent();

  return (
    <>
      <HeroBanner hero={home.hero} />
      <WhoWeAreSection content={home.whoWeAre} />
      <HomeHowItWorks content={home.howItWorks} />
      <JoinSection content={home.join} />
      <CommitmentSection content={home.commitment} />
      <SpotlightSection content={home.spotlight} />
    </>
  );
}

export default Home;
