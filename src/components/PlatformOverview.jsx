import { FiArrowUpRight, FiGlobe, FiShield, FiCpu } from 'react-icons/fi';
import './PlatformOverview.css';
import ImageSlider from './ImageSlider';
import img1 from '../assets/MainImages/IT Operations Management.png';
import img2 from '../assets/MainImages/Security & Compliance.png';
import img3 from '../assets/MainImages/Automation & Orchestration.png';

const heroHighlights = [
  'Unlock the first AI-powered customer operations suite.',
  'Lower your agent costs while scaling efficient support.',
  'Scale support without sacrificing customer experience.'
];

const primaryCards = [
  {
    icon: <FiGlobe />,
    title: 'IT Operations Management',
    description: 'Orchestrate observability, capacity, and performance with a unified command center.',
    badge: '',
    imageLabel: 'IT Operations Management',
    image: img1
  },
  {
    icon: <FiShield />,
    title: 'Security & Compliance',
    description: 'Bring proactive threat detection, compliance reporting, and access governance together.',
    badge: '',
    imageLabel: 'Security & Compliance',
    image: img2
  },
  {
    icon: <FiCpu />,
    title: 'Automation & Orchestration',
    description: 'Automate resolutions, approvals, and delivery pipelines with reusable runbooks.',
    badge: '',
    imageLabel: 'Automation & Orchestration',
    image: img3
  }
];

const PlatformOverview = () => {
  return (
    <section className="platform-overview" aria-labelledby="platform-overview-title">
      <div className="platform-overview-inner">
        <header className="platform-hero">
          <span className="platform-tag">Automation</span>
          <h2 id="platform-overview-title">Automate conversations with the power of AI</h2>
          <p>
            Reduce support volumes and increase satisfaction in minutes with Autointelli&apos;s AI-powered chatbots and
            automation tools.
          </p>
          <a href="/products" className="platform-hero-cta">
            Learn about automation
            <FiArrowUpRight aria-hidden="true" />
          </a>
          
          <ImageSlider />
        </header>



        <ul className="platform-highlights">
          {heroHighlights.map((item) => (
            <li key={item}>
              <span className="highlight-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="platform-primary-grid">
          {primaryCards.map((card) => (
            <article key={card.title} className="platform-primary-card">
              <header>
                <div className="primary-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
              </header>
              <div className="primary-image" aria-hidden="true">
                <img src={card.image} alt={card.imageLabel} />
              </div>
              <p>{card.description}</p>
              <a href="/products" className="primary-learn-more">Learn More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
