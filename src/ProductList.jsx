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
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'bird-of-paradise',
        name: 'Bird of Paradise',
        price: 88,
        image:
          'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'banana-leaf',
        name: 'Banana Leaf Plant',
        price: 64,
        image:
          'https://images.unsplash.com/photo-1439120639472-b7125010ded8?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'philodendron-selloum',
        name: 'Philodendron Selloum',
        price: 58,
        image:
          'https://images.unsplash.com/photo-1445298195902-9138ee07e84d?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'dracaena-fragrans',
        name: 'Corn Plant (Dracaena)',
        price: 52,
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
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
          'https://images.unsplash.com/photo-1515974251841-1b5f35a1a80e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'peacock-philodendron',
        name: 'Peacock Philodendron',
        price: 46,
        image:
          'https://images.unsplash.com/photo-1485630858033-2741b6ad8d6b?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'maranta-leuconeura',
        name: 'Prayer Plant',
        price: 42,
        image:
          'https://images.unsplash.com/photo-1478098712000-7117fe5e974a?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'alocasia-polly',
        name: 'Alocasia Polly',
        price: 66,
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80&sat=-30',
      },
      {
        id: 'philodendron-birkin',
        name: 'Philodendron Birkin',
        price: 60,
        image:
          'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'pothos-marble-queen',
        name: 'Pothos Marble Queen',
        price: 39,
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80&sat=-40',
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
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80&sat=-60',
      },
      {
        id: 'string-of-pearls',
        name: 'String of Pearls',
        price: 32,
        image:
          'https://images.unsplash.com/photo-1516401780202-7f46f08a8bd5?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'golden-barrel',
        name: 'Golden Barrel Cactus',
        price: 34,
        image:
          'https://images.unsplash.com/photo-1449440739486-563d71173987?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'haworthia-zebra',
        name: 'Haworthia Zebra',
        price: 22,
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80&sat=-10',
      },
      {
        id: 'euphorbia-ramena',
        name: 'Euphorbia Ramena',
        price: 48,
        image:
          'https://images.unsplash.com/photo-1434389677661-7beabf5c3c42?auto=format&fit=crop&w=900&q=80&sat=-20',
      },
      {
        id: 'moon-cactus',
        name: 'Moon Cactus',
        price: 28,
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80&sat=-70',
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
