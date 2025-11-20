import './FeaturesShowcase.css';
import databaseMonitoring from '../assets/stockimages/database monitoring.png';
import bandwidthMonitoring from '../assets/stockimages/Bandwith Monitoring.png';
import cloudMonitoring from '../assets/stockimages/Cloud Monitoring.png';
import ir1 from '../assets/stockimages/ir1.png';
import ir2 from '../assets/stockimages/ir2.png';
import ir3 from '../assets/stockimages/ir3.png';

const features = [
  {
    title: 'Unified Dashboard & Reporting',
    description:
      'Gain a holistic view of your entire IT infrastructure with customizable dashboards and insightful reports. Centralize monitoring data from all your systems for unparalleled visibility.',
    linkText: 'Learn More',
    layout: 'image-left',
    imageLabel: 'Dashboard analytics',
    image: ir1
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Automate incident remediation, routine tasks, and IT workflows with intelligent, adaptable automation. Reduce manual effort and free up your team for strategic initiatives.',
    linkText: 'Learn More',
    layout: 'image-right',
    imageLabel: 'Automation workflow',
    image: ir2
  },
  {
    title: 'Intelligent Incident Response',
    description:
      'Accelerate issue resolution with smart alerting, automated escalation, and collaborative incident management tools. Minimize downtime and maintain service continuity.',
    linkText: 'Learn More',
    layout: 'image-left',
    imageLabel: 'Incident collaboration',
    image: ir3
  }
];

const FeaturesShowcase = () => {
  return (
    <section className="features-showcase" aria-labelledby="features-showcase-title">
      <div className="features-showcase-inner">
        <header className="features-header">
          <span className="features-tag">PLATFORM HIGHLIGHTS</span>
          <h2 id="features-showcase-title">Powerful Features, Seamless Experience</h2>
          <p>Discover how our platform simplifies your IT landscape.</p>
        </header>

        <div className="features-list">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`feature-block ${feature.layout === 'image-right' ? 'is-reverse' : ''}`}
            >
              <div className="feature-image">
                <img src={feature.image} alt={feature.imageLabel} />
              </div>
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="/products" className="feature-link">
                  {feature.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
