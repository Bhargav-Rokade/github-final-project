import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import ProductList from './ProductList.jsx'
import CartPage from './pages/CartPage.jsx'
import AboutUs from './AboutUs.jsx'
import './App.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      <main className="landing-hero">
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Cultivating accessible houseplants with care, we send ready-made
            greens that brighten every corner while honoring the rhythms of your
            home.
          </p>
        </div>
        <button
          className="hero-cta"
          type="button"
          onClick={() => navigate('/plants')}
        >
          Get Started
        </button>
      </main>
      <section className="section-content">
        <AboutUs />
      </section>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}
