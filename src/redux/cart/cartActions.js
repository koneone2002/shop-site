import { CartActionTypes } from './cartTypes';
const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
