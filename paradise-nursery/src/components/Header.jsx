import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart/CartSlice.jsx'
import './Header.css'

export default function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="app-header">
      <div className="logo">Paradise Nursery</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          <span aria-label="Shopping cart" className="cart-icon">
            🛒
          </span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  )
}
