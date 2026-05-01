import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const existing = state.items.find((item) => item.id === plant.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  CartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity * item.price, 0)

export default CartSlice.reducer
