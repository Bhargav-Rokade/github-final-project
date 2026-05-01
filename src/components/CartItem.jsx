import { useDispatch } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../features/cart/CartSlice.jsx'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-meta">
        <h3>{item.name}</h3>
        <p>Unit price: ${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <button
            className="ghost-btn"
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity === 1}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            className="ghost-btn"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
          <button
            className="ghost-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
    </article>
  )
}

export function calculateCartTotal(items = []) {
  return items.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
}
