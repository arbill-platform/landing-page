import HeroBanner from '../components/home/HeroBanner.jsx';
import WhoWeAreSection from '../components/home/WhoWeAreSection.jsx';
import HomeHowItWorks from '../components/home/HomeHowItWorks.jsx';
import JoinSection from '../components/home/JoinSection.jsx';
import CommitmentSection from '../components/home/CommitmentSection.jsx';
import SpotlightSection from '../components/home/SpotlightSection.jsx';
import {
  homeHero,
  whoWeAreContent,
  homeWorkSteps,
  joinAudienceContent,
  commitmentContent,
  spotlightContent,
} from '../content.js';

function Home() {
  return (
    <>
      <HeroBanner hero={homeHero} />
      <WhoWeAreSection content={whoWeAreContent} />
      <HomeHowItWorks steps={homeWorkSteps} />
      <JoinSection content={joinAudienceContent} />
      <CommitmentSection content={commitmentContent} />
      <SpotlightSection content={spotlightContent} />
    </>
  );
}

export default Home;
