import './TestimonialsCarousel.css';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const testimonials = [
  {
    quote: 'Our team uses this platform daily to manage complex IT environments. The unified dashboard has been a game-changer.',
    name: 'Sarah Chen',
    title: 'IT Director, Acme Corp.'
  },
  {
    quote: 'The proactive alerts and automated workflows have drastically reduced our incident response times.',
    name: 'David Lee',
    title: 'DevOps Lead, InnovateX'
  },
  {
    quote: 'A truly comprehensive solution that scales with our needs. Integration was smooth and support is excellent.',
    name: 'Maria Garcia',
    title: 'Head of SRE, Global Systems'
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-inner">
        <div className="testimonials-content">
          <span className="testimonials-tag">CUSTOMER VOICES</span>
          <h2 id="testimonials-title">Loved by operations teams everywhere</h2>
          <p>
            Full-width, human stories that show how IT teams orchestrate resilient operations with Autointelli.
          </p>
        </div>

        <div className="testimonials-stack-wrapper">
          <div className="testimonials-stack-pin">
            <ScrollStack
              className="testimonials-scroll-stack scroll-stack-window"
              itemDistance={140}
              itemScale={0.045}
              itemStackDistance={48}
              stackPosition="28%"
              scaleEndPosition="15%"
              baseScale={0.8}
              rotationAmount={0.35}
              blurAmount={0.6}
              useWindowScroll
            >
              {testimonials.map((testimonial) => (
                <ScrollStackItem key={testimonial.name} itemClassName="testimonial-stack-card">
                  <p className="testimonial-stack-quote">“{testimonial.quote}”</p>
                  <div className="testimonial-stack-author">
                    <span className="testimonial-stack-avatar" aria-hidden="true">
                      {testimonial.name
                        .split(' ')
                        .map((word) => word.charAt(0))
                        .join('')
                        .slice(0, 2)}
                    </span>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
