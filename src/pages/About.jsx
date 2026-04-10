import { useEffect } from 'react'

const methodology = [
  { icon: '💡', title: 'Visual Learning', text: 'Clear diagrams and examples make every formula intuitive.' },
  { icon: '📝', title: 'Regular Practice', text: 'Question sets tailored to boards and competitive exams.' },
  { icon: '🧩', title: 'Personal Feedback', text: 'Actionable insights after every test and doubt session.' },
  { icon: '🎯', title: 'Exam Strategy', text: 'Smart shortcuts and time-saving techniques for better marks.' },
]

function About() {
  useEffect(() => {
    document.title = 'MATH πRATES'
  }, [])

  return (
    <div className="page-wrap page-detail">
      <section className="section detail-hero reveal">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h1>Maths Pirates brings clarity to every classroom.</h1>
          <p>We blend inspiring teaching, exam preparation, and doubt-solving to help students win at Maths.</p>
        </div>
        <div className="detail-actions">
          <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
          <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Join Now</a>
        </div>
      </section>

      <section className="section info-grid reveal">
        <article className="info-card glow-card reveal">
          <h2>Our Story</h2>
          <p>Born from the idea that every student can enjoy Maths, Maths Pirates uses friendly teaching, strong fundamentals, and modern exam practice to build confidence.</p>
        </article>
        <article className="info-card glow-card reveal">
          <h2>Mission</h2>
          <p>Make maths easy, enjoyable and scoring for every student from Class 6 through competitive exam preparation.</p>
        </article>
        <article className="info-card glow-card reveal">
          <h2>Vision</h2>
          <p>Become the top maths coaching brand in Patiala known for clarity, results, and transformative support.</p>
        </article>
      </section>

      <section className="section founder-section reveal">
        <div className="founder-card glow-card">
          <h2>Founder’s Message</h2>
          <p>“I created Maths Pirates because I saw too many students lose interest in Maths before they understood it. Today, we turn that confusion into a clear path to success with every lesson.”</p>
          <div className="founder-meta">
            <span>Founder, Maths Pirates</span>
            <span>Ambala Cantt, Haryana</span>
          </div>
        </div>
      </section>

      <section className="section methodology-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Teaching Methodology</p>
          <h2>Concept-first, practice-driven, and results-focused.</h2>
        </div>
        <div className="methodology-grid">
          {methodology.map((item) => (
            <article key={item.title} className="method-card glow-card reveal">
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section detail-cta reveal">
        <h2>Ready to transform your Maths journey?</h2>
        <div className="detail-cta-actions">
          <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
          <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Join Now</a>
        </div>
      </section>
    </div>
  )
}

export default About
