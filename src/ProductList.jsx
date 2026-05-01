import Header from './components/Header.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  selectCartItems,
} from './features/cart/CartSlice.jsx'
import './App.css'

const plantCatalog = [
      {
        category: 'Tropical Haven',
        plants: [
          {
            id: 'fiddle-leaf',
            name: 'Fiddle Leaf Fig',
            price: 78,
            image:
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
          },
          {
            id: 'monstera-deliciosa',
            name: 'Monstera Deliciosa',
            price: 62,
            image:
              'https://images.unsplash.com/photo-1523419409545-5eb9a3b42d3d?auto=format&fit=crop&w=900&q=80',
          },
        ],
      },
      {
        category: 'Foliage Studio',
        plants: [
          {
            id: 'calathea-orbifolia',
            name: 'Calathea Orbifolia',
            price: 54,
            image:
              'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
          },
          {
            id: 'peacock-philodendron',
            name: 'Peacock Philodendron',
            price: 46,
            image:
              'https://images.unsplash.com/photo-1434389677661-7beabf5c3c42?auto=format&fit=crop&w=900&q=80',
          },
        ],
      },
      {
        category: 'Desert Tones',
        plants: [
          {
            id: 'aloe-vera',
            name: 'Aloe Vera',
            price: 26,
            image:
              'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
          },
          {
            id: 'string-of-pearls',
            name: 'String of Pearls',
            price: 32,
            image:
              'https://images.unsplash.com/photo-1516401780202-7f46f08a8bd5?auto=format&fit=crop&w=900&q=80',
          },
        ],
      },
]

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const isInCart = (id) => cartItems.some((item) => item.id === id)

  return (
    <div className="App">
      <Header />
      <section className="section-content">
        <div className="cart-summary">
          <div>
            <h2>Shop the collection</h2>
            <p>Hand-selected plants curated by our in-house growers.</p>
          </div>
          <div className="summary-meta">
            <span>Ready-to-ship greenery</span>
            <span>Complimentary tips card</span>
          </div>
        </div>

        <div className="category-grid">
          {plantCatalog.map((section) => (
            <article className="category-card" key={section.category}>
              <h3>{section.category}</h3>
              <div className="product-grid">
                {section.plants.map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-info">
                      <h4>{plant.name}</h4>
                      <span>${plant.price}</span>
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
