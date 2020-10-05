import SHOP_DATA from './SHOP_DATA';

import ShopActionTypes from './shopTypes';

const INITIAL_STATE = {
  collections: SHOP_DATA
};
const { UPDATE_COLLECTIONS } = ShopActionTypes;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
