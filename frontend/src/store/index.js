import { configureStore }from '@reduxjs/toolkit'
import searchProductReducer from './searchProduct'
import cartReducer from './cart'

const store = configureStore({
    reducer: {searchProduct: searchProductReducer, cart: cartReducer}
})

export default store