import { Link } from 'react-router-dom';
import './FinalCta.css';

const FinalCta = () => {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta-inner">
        <div className="final-cta-copy">
          <h2 id="final-cta-title">Ready to Transform Your ITOps?</h2>
          <p>Start your journey to smarter, more efficient IT operations today.</p>
        </div>
        <div className="final-cta-actions">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="final-cta-btn primary">
            Start Free Trial
          </Link>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="final-cta-btn secondary">
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
