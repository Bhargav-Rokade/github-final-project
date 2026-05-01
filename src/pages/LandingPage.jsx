import { Link } from 'react-router-dom'
import AboutUs from '../AboutUs.jsx'
import '../App.css'

export default function LandingPage() {
  return (
    <div className="App">
      <main className="landing-hero">
        <div>
          <h1>Paradise Nursery</h1>
          <p>
            Cultivating accessible houseplants with care, we send ready-made
            greens that brighten every corner while honoring the rhythms of your
            home.
          </p>
        </div>
        <Link to="/plants" className="hero-cta">
          Get Started
        </Link>
      </main>
      <section className="section-content">
        <AboutUs />
      </section>
    </div>
  )
}
