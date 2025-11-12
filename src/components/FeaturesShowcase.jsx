import './FeaturesShowcase.css';

const features = [
  {
    title: 'Unified Dashboard & Reporting',
    description:
      'Gain a holistic view of your entire IT infrastructure with customizable dashboards and insightful reports. Centralize monitoring data from all your systems for unparalleled visibility.',
    linkText: 'Learn More',
    layout: 'image-left',
    imageLabel: 'Dashboard analytics'
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Automate incident remediation, routine tasks, and IT workflows with intelligent, adaptable automation. Reduce manual effort and free up your team for strategic initiatives.',
    linkText: 'Learn More',
    layout: 'image-right',
    imageLabel: 'Automation workflow'
  },
  {
    title: 'Intelligent Incident Response',
    description:
      'Accelerate issue resolution with smart alerting, automated escalation, and collaborative incident management tools. Minimize downtime and maintain service continuity.',
    linkText: 'Learn More',
    layout: 'image-left',
    imageLabel: 'Incident collaboration'
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
              <div className="feature-image" aria-hidden="true">
                <span>{feature.imageLabel}</span>
              </div>
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#features" className="feature-link">
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
