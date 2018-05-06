import { ADD_INGREDIENT, REMOVE_INGREDIENT, CLEAR_STATE } from './actionTypes';

// Mutations
export const addIngredient = name => {
  return { type: ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredient = name => {
  return { type: REMOVE_INGREDIENT, ingredientName: name };
};

export const clearState = () => {
  return { type: CLEAR_STATE };
};

// Actions
export const addIngAsync = name => dispatch => {
  setTimeout(() => {
    dispatch(addIngredient(name));
  }, 2000);
};
