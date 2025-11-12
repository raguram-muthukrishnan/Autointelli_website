import Hero from '../components/Hero';
import SocialProofBar from '../components/SocialProofBar';
import PlatformOverview from '../components/PlatformOverview';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FeaturesShowcase from '../components/FeaturesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import IntegrationHub from '../components/IntegrationHub';
import FinalCta from '../components/FinalCta';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <PlatformOverview />
      <TestimonialsCarousel />
      <FeaturesShowcase />
      <WhyChooseUs />
      <SuccessStories />
      <IntegrationHub />
      <FinalCta />
    </>
  );
};

export default Home;
