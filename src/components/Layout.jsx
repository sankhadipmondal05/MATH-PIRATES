import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FloatingSymbols from './FloatingSymbols'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/contact', label: 'Contact' },
]

function Layout({ children }) {
  const location = useLocation()
  const [progress, setProgress] = useState(0)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check if the page is being reloaded
    const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
    if (isReload && location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const percent = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(percent)

      // Only show WhatsApp after scrolling past 400px if on home page
      // On other pages, show it always or after small scroll
      if (location.pathname === '/') {
        setShowWhatsApp(scrollTop > 300)
      } else {
        setShowWhatsApp(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    const revealedElements = document.querySelectorAll('.reveal')
    revealedElements.forEach((el) => revealObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealedElements.forEach((el) => revealObserver.unobserve(el))
    }
  }, [location.pathname])

  return (
    <>
      {location.pathname !== '/' && <FloatingSymbols isFixed />}
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="brand">
            <span>MATH &nbsp;<span className="pi-char">π</span>RATES</span>
          </NavLink>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <div className={`nav-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <NavLink to="/" className="footer-brand">
              <div>
                <strong>MATH &nbsp;<span className="pi-char">π</span>RATES</strong>
                <p>Ideas, clarity, and exam success.</p>
              </div>
            </NavLink>
          </div>
          <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <h4>Courses</h4>
              <NavLink to="/courses#foundation">Class 6–8</NavLink>
              <NavLink to="/courses#boards">Class 9–10</NavLink>
              <NavLink to="/courses#advanced">Class 11–12</NavLink>
            </div>
            <div>
              <h4>Contact</h4>
              <p>Ambala Cantt, Haryana</p>
              <p>86859 15534</p>
              <p>hello@mathspirates.com</p>
              <div className="social-links">
                <a href="https://www.instagram.com/maths.pie.rates" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Maths Pirates. All rights reserved.</p>
        </div>
      </footer>
      {location.pathname !== '/contact' && (
        <a className={`whatsapp-float ${showWhatsApp ? 'visible' : ''}`} href="https://wa.me/918685915534" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="WhatsApp" width="24" height="24" />
          <span>WhatsApp</span>
        </a>
      )}
      <a className={`download-float ${showWhatsApp ? 'visible' : ''}`} href="https://ffxqeh.on-app.in/app/home?orgCode=ffxqeh&referrer=utm_source=copy-link&utm_medium=tutor-app-referral" target="_blank" rel="noopener noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        <span>Get App</span>
      </a>
    </>
  )
}

export default Layout
