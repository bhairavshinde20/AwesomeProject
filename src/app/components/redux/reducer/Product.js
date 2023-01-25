import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },
  reducers: {
    // FetchProduct: (state, action) => {
    //   const itemInCart = state.product.find(product => product.id == action.payload.id);
    //   if (itemInCart) {
    //     state.product.push({...action.payload});
    //   }
    // },
    ViewSingleProduct: (state, action) => {
      return {...state, product: action.payload};
      // return{...state.product.push(action.payload)}
      // state.product.push(action.payload);
    },
  },
});

export const {ViewSingleProduct, FetchProduct} = cartSlice.actions;

export default cartSlice.reducer;
