import './Hero.css';
import laptopImage from '../assets/Laptop.png';
import circles from '../assets/circless.svg'
import arrow_right from '../assets/arrow_right.svg'
import imgVideoPlaceholder from '../assets/Video Placeholder.svg'

export default function Hero() {
  const handlePlayClick = () => {
    window.open('https://youtu.be/KWC6-iVFpKQ?si=W2j0T4deThSMa0FW', '_blank');
  };

  return (
    <div className="hero-container" data-name="Hero_d">
      <div className="hero-vector" data-name="Vector">
        <img alt="Decorative circles background" src={circles} />
      </div>

      <div className="hero-content">
        <p className="hero-title">
          Master your Incidents:<br />Take Control Of Your IT Operations
        </p>
        <p className="hero-subtitle">
          {`Say "NO" to Application downtime with Autointelli's Real time Observability Platform`}
        </p>
        <div className="hero-button-set" data-name="Button Set">
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <div className="hero-primary-button" data-name="Master Primary Button">
              <p className="hero-primary-button-text">
                Get started
              </p>
              <div className="hero-arrow-icon" data-name="Line Rounded/Arrow Right">
                {/* Inlined SVG for arrow */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <div className="hero-secondary-button" data-name="Master Secondary Button">
              <p className="hero-secondary-button-text">
                Talk to sales
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="hero-laptop-image" data-name="Group 2 23">
        <img alt="Laptop showing a dashboard" src={laptopImage} />
        <div className="hero-video-placeholder" data-name="Video Placeholder" onClick={handlePlayClick} style={{cursor: 'pointer'}}>
          <img alt="Play video button" src={imgVideoPlaceholder} style={{borderRadius: '50%'}} />
        </div>
      </div>
    </div>
  );
}

