import { FiArrowUpRight, FiGlobe, FiShield, FiCpu } from 'react-icons/fi';
import './PlatformOverview.css';

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
    badge: 'Fin',
    imageLabel: 'Automation snapshot'
  },
  {
    icon: <FiShield />,
    title: 'Security & Compliance',
    description: 'Bring proactive threat detection, compliance reporting, and access governance together.',
    badge: 'Workflows',
    imageLabel: 'Workflow builder overview'
  },
  {
    icon: <FiCpu />,
    title: 'Automation & Orchestration',
    description: 'Automate resolutions, approvals, and delivery pipelines with reusable runbooks.',
    badge: 'Runbooks',
    imageLabel: 'Automation canvas'
  }
];

const secondaryCards = [
  {
    title: 'AI-powered Inbox',
    description: 'Give teams a streamlined inbox with AI-suggested responses and case triage.'
  },
  {
    title: 'Article Suggestions',
    description: 'Surface the right knowledge automatically and keep documentation always relevant.'
  },
  {
    title: 'Conversation Topics',
    description: 'Track trending issues with visual analytics so leaders can respond in real time.'
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
          <a href="#features" className="platform-hero-cta">
            Learn about automation
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <div className="platform-hero-visual" aria-hidden="true">
          <div className="platform-hero-card">
            <span className="platform-hero-placeholder">UI preview placeholder</span>
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
                <span className="primary-badge">{card.badge}</span>
                <h3>{card.title}</h3>
              </header>
              <div className="primary-image" aria-hidden="true">
                <span>{card.imageLabel}</span>
              </div>
              <p>{card.description}</p>
              <div className="primary-icon" aria-hidden="true">
                {card.icon}
              </div>
            </article>
          ))}
        </div>

        <div className="platform-secondary-grid">
          {secondaryCards.map((card) => (
            <article key={card.title} className="platform-secondary-card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <a href="#features" className="secondary-link">
                Learn more
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
