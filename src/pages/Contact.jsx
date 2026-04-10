import { useEffect, useState } from 'react'

function Contact() {
  useEffect(() => {
    document.title = 'MATH πRATES'
  }, [])

  const [selectedCourse, setSelectedCourse] = useState('Class 6-8 Foundation')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const courseOptions = [
    'Class 6-8 Foundation',
    'Class 9-10 Boards',
    'Class 11-12 Advanced',
    'JEE Preparation',
    'NEET Support'
  ]

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const school = form.school.value.trim()
    const city = form.city.value.trim()
    const message = `Hi Maths Pirates, I want to enroll.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(selectedCourse)}%0ASchool: ${encodeURIComponent(school)}%0ACity: ${encodeURIComponent(city)}`
    window.location.href = `https://wa.me/918685915534?text=${message}`
  }

  return (
    <div className="page-wrap page-detail">
      <section className="section detail-hero reveal">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Reach out and enroll with Maths Pirates today.</h1>
          <p>Fast support for phone calls, WhatsApp, or enrollment through our quick form.</p>
        </div>
        <div className="detail-actions">
          <a className="btn btn-primary" href="tel:8685915534">Call Now</a>
          <a className="btn btn-secondary" href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
        </div>
      </section>

      <section className="section contact-grid reveal">
        <div className="contact-card glow-card reveal">
          <h2>Contact Info</h2>
          <p><strong>Phone:</strong> <a href="tel:8685915534">86859 15534</a></p>
          <p><strong>Location:</strong> <a href="https://www.google.com/maps/search/?api=1&query=Chandigarh+complex+kardhan+road+near+Geeta+traders+Ambala+Cantt+Haryana+133006" target="_blank" rel="noopener noreferrer">Chandigarh complex, Kardhan road, near Geeta traders, Ambala Cantt, Haryana 133006</a></p>
          <p><strong>Email:</strong> hello@mathspirates.com</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">Message Us</a></p>
        </div>
        <form className="contact-form glow-card reveal" id="enrollForm" onSubmit={handleSubmit}>
          <h2>Enroll via WhatsApp</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="86859 15534" required />
          <label>Course</label>
          <div className={`custom-select ${dropdownOpen ? 'open' : ''}`}>
            <div className="select-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {selectedCourse}
            </div>
            {dropdownOpen && (
              <ul className="select-options">
                {courseOptions.map(option => (
                  <li
                    key={option}
                    className={selectedCourse === option ? 'selected' : ''}
                    onClick={() => {
                      setSelectedCourse(option)
                      setDropdownOpen(false)
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <label htmlFor="school">School Name</label>
          <input type="text" id="school" name="school" placeholder="Your school name" required />
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="Your city" required />
          <button type="submit" className="btn btn-primary">Send to WhatsApp</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
