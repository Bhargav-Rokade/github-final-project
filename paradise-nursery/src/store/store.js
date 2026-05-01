import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/CartSlice.jsx'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})
