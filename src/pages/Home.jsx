import Hero from '../components/Hero';
import SocialProofBar from '../components/SocialProofBar';
import PlatformOverview from '../components/PlatformOverview';
import MeasurableResults from '../components/MeasurableResults';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FeaturesShowcase from '../components/FeaturesShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import AwardsRecognition from '../components/AwardsRecognition';
import IntegrationHub from '../components/IntegrationHub';
import Newsletter from '../components/Newsletter';
import FinalCta from '../components/FinalCta';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <PlatformOverview />
      <MeasurableResults />
      <TestimonialsCarousel />
      <FeaturesShowcase />
      <WhyChooseUs />
      <AwardsRecognition />
      <IntegrationHub />
      <Newsletter />
      <FinalCta />
    </>
  );
};

export default Home;
