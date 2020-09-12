import { CartActionTypes } from './cartTypes';
const { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } = CartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});
