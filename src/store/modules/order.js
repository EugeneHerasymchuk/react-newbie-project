import { REMOVE_INGREDIENT, ADD_INGREDIENT, CLEAR_STATE } from '../actions';
import { prices, startPrice } from 'src/config/order';
const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 2,
  purchasable: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      console.log('add ingredient');
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + prices[action.ingredientName],
        purchasable:
          state.totalPrice + prices[action.ingredientName] > startPrice
      };
    case REMOVE_INGREDIENT:
      console.log('aremove ingredient');
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]:
            state.ingredients[action.ingredientName] - 1 < 0
              ? 0
              : state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - prices[action.ingredientName],
        purchasable:
          state.totalPrice - prices[action.ingredientName] > startPrice
      };
    case CLEAR_STATE: {
      console.log('clear state');
      const cleanState = { ...state.ingredients };
      for (let key in cleanState) {
        cleanState[key] = 0;
      }

      return {
        ...state,
        ingredients: cleanState,
        totalPrice: 2,
        purchasable: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
