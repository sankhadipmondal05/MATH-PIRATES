import { useEffect } from 'react'

const courseList = [
  {
    id: 'foundation',
    subjects: 'Math, Science, English, S.St',
    title: 'Foundation',
    target: 'Class 6-8',
    outcome: 'Build arithmetic confidence, strong fundamentals, and a love for problem solving.',
    features: ['Concept clarity with visual explanations', 'Fun mastery sessions and practice drills', 'Weekly checks and progress reports'],
  },
  {
    id: 'boards',
    subjects: 'Math, English, S.St',
    title: 'Boards',
    target: 'Class 9-10',
    outcome: 'Board-centric coaching with exam strategy, concept reinforcement and sample papers.',
    features: ['Chapters taught with board patterns', 'Daily practice and revision plan', 'Doubt clearing and one-on-one support'],
  },
  {
    id: 'advanced',
    subjects: 'Maths',
    title: 'Advanced',
    target: 'Class 11-12',
    outcome: 'Advanced theory and problem solving for strong board and competitive performance.',
    features: ['In-depth concept sessions', 'Advanced application with solved examples', 'Regular milestone tests and doubt clinics'],
  },
  {
    id: 'jee',
    title: 'JEE Preparation',
    outcome: 'Rigorous JEE coaching with concept mastery, focus topics and exam simulations.',
    features: ['JEE-style problem solving', 'Speed, accuracy and application drills', 'Mock tests and performance reviews'],
  },
  {
    id: 'neet',
    title: 'NEET Support',
    outcome: 'Targeted NEET training with conceptual clarity and exam-specific practice.',
    features: ['Important topics and shortcut methods', 'Question solving under exam conditions', 'Weekly reviews and doubt clearing'],
  },
]

function Courses() {
  useEffect(() => {
    document.title = 'MATH πRATES'
  }, [])

  return (
    <div className="page-wrap page-detail">
      <section className="section detail-hero reveal">
        <div className="section-heading">
          <p className="eyebrow">Courses</p>
          <h1>Courses built for score improvement and exam readiness.</h1>
          <p>Choose the right path with clear outcomes, features, and high-conversion care.</p>
        </div>
        <div className="detail-actions">
          <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
          <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Enroll Now</a>
        </div>
      </section>

      <section className="section course-detail-grid reveal">
        {courseList.map((course) => (
          <article key={course.id} className="detail-card reveal" id={course.id}>
            <div className="detail-card-header">
              {course.subjects && <p className="subjects-list">{course.subjects}</p>}
              <h2>{course.title}{course.target && ` • ${course.target}`}</h2>
            </div>
            <p>{course.outcome}</p>
            <ul>
              {course.features.map((feature) => (
                <li key={feature}>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="detail-card-actions">
              <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
              <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Enroll Now</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Courses
