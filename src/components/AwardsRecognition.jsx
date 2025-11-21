import './AwardsRecogonition.css';
import { FiAward } from 'react-icons/fi';
import medalIcon from '../assets/awards/medal-award.svg';
import award1 from '../assets/awards/1.jpg';
import award2 from '../assets/awards/2.jpg';
import award3 from '../assets/awards/3.jpg';

const awards = [
  {
    year: '2024',
    title: 'Department of Industry',
    subtitle: 'Govt of India National Award',
    achievement: 'Nominee for the year',
    color: '#F0CE1D'
  },
  {
    year: '2023',
    title: 'Supporting E-Governance',
    subtitle: 'Governor of Tamil Nadu',
    achievement: 'Best Automation Company',
    color: '#F0CE1D'
  },
  {
    year: '2022',
    title: 'UK Government',
    subtitle: 'London',
    achievement: 'Best IT Infrastructure Automation',
    color: '#F0CE1D'
  },
  {
    year: '2019',
    title: 'Bizlab Fintech',
    subtitle: 'Award from Kumar Mangalam Birla',
    achievement: 'Best Infrastructure Automation Firm',
    color: '#F0CE1D'
  }
];

const awardImages = [
  { image: award1, title: 'Award Recognition', year: '2022', color: '#F0CE1D' },
  { image: award2, title: 'Excellence Award', year: '2015', color: '#F0CE1D' },
  { image: award3, title: 'Innovation Award', year: '2011', color: '#F0CE1D' }
];

const AwardsRecognition = () => {
  return (
    <section className="awards-recognition" aria-labelledby="awards-title">
      <div className="awards-inner">
        <h2 id="awards-title" className="awards-title">
          Industry Recognition & Achievements
        </h2>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-icon-wrapper">
                <img src={medalIcon} alt="Medal Award" className="award-icon" />
              </div>
              
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-subtitle">{award.subtitle}</p>
                
                <div className="award-year" style={{ color: award.color }}>
                  {award.year}
                </div>
                
                <p className="award-achievement">{award.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Award Images Section */}
        <div className="award-images-grid">
          {awardImages.map((awardImg, index) => (
            <div key={index} className="award-image-card">
              <div className="award-image-wrapper">
                <img src={awardImg.image} alt={awardImg.title} />
              </div>
              <div className="award-image-footer">
                <span className="award-image-year" style={{ color: awardImg.color }}>
                  {awardImg.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
