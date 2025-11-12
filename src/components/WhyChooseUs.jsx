import { FiCheckCircle } from 'react-icons/fi';
import './WhyChooseUs.css';

const advantages = [
  { text: 'Comprehensive Visibility: Monitor every layer of your IT stack.' },
  { text: 'AI-Driven Insights: Proactive detection and root cause analysis.' },
  { text: 'Scalable & Flexible: Adapts to businesses of all sizes.' },
  { text: 'Robust Security: Built with enterprise-grade protection.' },
  { text: 'Dedicated Support: 24/7 expert assistance.' }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <div className="why-choose-inner">
        <div className="why-choose-visual" aria-hidden="true">
          <div className="why-choose-glow" />
          <span>Integrated
            <br />ITO<span>ps</span>
          </span>
        </div>
        <div className="why-choose-copy">
          <span className="why-choose-tag">WHY CHOOSE US</span>
          <h2 id="why-choose-title">Why Choose Our ITOps Platform?</h2>
          <p>Experience the difference of a truly integrated and intelligent solution.</p>
          <ul>
            {advantages.map((item) => (
              <li key={item.text}>
                <FiCheckCircle aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <a href="#features" className="why-choose-cta">
            View All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
