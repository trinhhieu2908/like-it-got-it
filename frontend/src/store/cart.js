import { createSlice }from '@reduxjs/toolkit'

const initialCartState = {
    showCart: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {        
        open(state) {
            state.showCart = true;
        },
        close(state) {
            state.showCart = false;
        },
    } 
 });
 
 export const cartActions = cartSlice.actions
 export default cartSlice.reducer