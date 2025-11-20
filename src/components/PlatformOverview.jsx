import { FiArrowUpRight, FiGlobe, FiShield, FiCpu } from 'react-icons/fi';
import './PlatformOverview.css';
import ir1 from '../assets/stockimages/ir1.png';
import ir2 from '../assets/stockimages/ir2.png';
import ir3 from '../assets/stockimages/ir3.png';
import dashboardImage from '../assets/stockimages/database monitoring.png';

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
    imageLabel: 'Automation snapshot',
    image: ir1
  },
  {
    icon: <FiShield />,
    title: 'Security & Compliance',
    description: 'Bring proactive threat detection, compliance reporting, and access governance together.',
    badge: '',
    imageLabel: 'Workflow builder overview',
    image: ir2
  },
  {
    icon: <FiCpu />,
    title: 'Automation & Orchestration',
    description: 'Automate resolutions, approvals, and delivery pipelines with reusable runbooks.',
    badge: '',
    imageLabel: 'Automation canvas',
    image: ir3
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
        </header>

        <div className="platform-hero-visual" aria-hidden="true">
          <div className="platform-hero-card">
            <img src={dashboardImage} alt="Dashboard Preview" className="platform-hero-image" />
          </div>
        </div>

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
