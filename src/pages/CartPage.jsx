import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header.jsx'
import CartItem, { calculateCartTotal } from '../components/CartItem.jsx'
import {
  selectCartCount,
  selectCartItems,
} from '../features/cart/CartSlice.jsx'
import '../App.css'

export default function CartPage() {
  const items = useSelector(selectCartItems)
  const totalPlants = useSelector(selectCartCount)
  const totalCost = calculateCartTotal(items)

  return (
    <div className="App">
      <Header />
      <section className="section-content">
        <div className="cart-summary">
          <div>
            <h2>Your cart</h2>
            <p>Review your selections before checkout.</p>
          </div>
          <div className="summary-meta">
            <span>{totalPlants} plant{totalPlants === 1 ? '' : 's'}</span>
            <span>${totalCost.toFixed(2)} total</span>
          </div>
          <div className="cart-actions">
            <Link to="/plants" className="ghost-btn continue-link">
              Continue Shopping
            </Link>
            <button className="primary-btn" type="button">
              Checkout (Coming Soon)
            </button>
          </div>
        </div>

        <div className="cart-items">
          {items.length === 0 && (
            <p>Your cart is empty. Add some greenery to start.</p>
          )}
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
