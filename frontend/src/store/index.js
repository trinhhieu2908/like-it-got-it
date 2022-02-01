import { configureStore }from '@reduxjs/toolkit'
import searchProductReducer from './searchProduct'
import cartReducer from './cart'
import pageSelectorReducer from './pageSelector'

const store = configureStore({
    reducer: {searchProduct: searchProductReducer, cart: cartReducer, pageSelector: pageSelectorReducer}
})

export default store