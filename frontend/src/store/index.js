import { configureStore }from '@reduxjs/toolkit'
import searchProductReducer from './searchProduct'
import cartReducer from './cart'
import uiSliceReducer from './ui-slice'

const store = configureStore({
    reducer: {searchProduct: searchProductReducer, cart: cartReducer, ui: uiSliceReducer}
})

export default store