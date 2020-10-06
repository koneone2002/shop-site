import { ShopActionTypes } from './shopTypes';

const INITIAL_STATE = {
  collections: null
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
