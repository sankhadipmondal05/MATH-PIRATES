import { useEffect, useMemo, useState } from 'react'
import FloatingSymbols from '../components/FloatingSymbols'

const features = [
  { icon: '💡', title: 'Concept Clarity First', text: 'Focus on deep understanding, not rote memorization.' },
  { icon: '🧠', title: 'Doubt Solving Focus', text: 'Live support and quick doubt resolution for every student.' },
  { icon: '📝', title: 'Weekly Test System', text: 'Regular assessments that build exam readiness and confidence.' },
  { icon: '🚀', title: 'JEE/NEET Level Training', text: 'Advanced problem solving designed for high-stakes exams.' },
  { icon: '🤝', title: 'Personal Attention', text: 'Small groups and one-on-one care keep every student on track.' },
]

const courses = [
  { icon: '📚', title: 'Class 6–8 Foundation', text: 'Build a strong base with playful, concept-first teaching.' },
  { icon: '🧮', title: 'Class 9–10 Boards', text: 'Score significantly higher with board-focused strategies and practice.' },
  { icon: '📈', title: 'Class 11–12 Advanced', text: 'Master concepts with rigorous practice for higher secondary success.' },
  { icon: '🎯', title: 'JEE Preparation', text: 'Concept-driven coaching designed for top JEE Maths scores.' },
  { icon: '🩺', title: 'NEET Support', text: 'Targeted Maths coaching to help you clear NEET with confidence.' },
]

const testimonials = [
  {
    quote: '“I scored 95% in Maths after only 2 months with Maths Pirates. The doubt-solving sessions are incredible.”',
    name: 'Ayushi, Class 10',
  },
  {
    quote: '“The weekly tests and detailed feedback made my JEE prep feel structured and stress-free.”',
    name: 'Rohan, JEE Aspirant',
  },
  {
    quote: '“The teacher explained every concept clearly, and I finally enjoy Maths.”',
    name: 'Priya, NEET Aspirant',
  },
]

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    document.title = 'MATH πRATES'
  }, [])

  useEffect(() => {
    const timeout = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(timeout)
  }, [])

  const activeSlide = useMemo(() => testimonials[activeTestimonial], [activeTestimonial])

  return (
    <div className="page-wrap">
      <section className="hero-section reveal">
        <div className="hero-pattern" />
        <div className="hero-content">
          <div className="hero-badge">500+ Students · 90%+ Results</div>
          <div className="hero-logo-card glow-card">
            <img src="/logo.jpeg" alt="Maths Pirates glowing logo" loading="lazy" />
          </div>
          <h1>Turn Confusion Into Clarity<br></br>⚡</h1>
          <p>Master Maths from Class 6–12, JEE & NEET with Concept-Based Learning.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
            <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="hero-badges">
            <span>Trusted by learners across Patiala<br></br>Live doubt solving • Weekly performance reports</span>
          </div>
        </div>
        <FloatingSymbols />
      </section>

      <section className="section why-section reveal" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why Maths Pirates?</p>
          <h2>Built for clarity, confidence, and competitive edge.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card glow-card hover-glow reveal">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Teaching Process</p>
          <h2>Our learning flow is simple, proven, and animated.</h2>
        </div>
        <div className="timeline">
          {['Learn Concept', 'Practice Questions', 'Solve Doubts', 'Weekly Tests', 'Performance Tracking'].map((step) => (
            <div key={step} className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-step">{step}</div>
                <p>
                  {step === 'Learn Concept' && 'Start with clarity, visual models and step-by-step logic.'}
                  {step === 'Practice Questions' && 'Apply concepts instantly with guided practice sessions.'}
                  {step === 'Solve Doubts' && 'Get fast resolution on every question and gap in understanding.'}
                  {step === 'Weekly Tests' && 'Track progress and reinforce strengths with targeted tests.'}
                  {step === 'Performance Tracking' && 'Review results with insights and next-step coaching.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section courses-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Courses</p>
          <h2>High-conversion study paths for every learner.</h2>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card hover-card reveal">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <div className="course-actions">
                <a className="btn btn-small" href="tel:8685915534">Call</a>
                <a className="btn btn-small btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Enroll Now</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What students say about Maths Pirates.</h2>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-content" key={activeTestimonial}>
              <p>{activeSlide.quote}</p>
              <div className="testimonial-meta">
                <span>{activeSlide.name}</span>
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-banner reveal">
        <div>
          <h2>Struggling in Maths? Let’s Fix It Today.</h2>
          <p>Speak with our expert mentors and start your score transformation now.</p>
        </div>
        <div className="cta-banner-actions">
          <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
          <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
        </div>
      </section>
    </div>
  )
}

export default Home
