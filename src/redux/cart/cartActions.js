import { CartActionTypes } from './cartTypes';
const { TOGGLE_CART_HIDDEN } = CartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});
