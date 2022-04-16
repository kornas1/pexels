import * as types from "../actions/search";

const initialState = {
  search: "",
};
//обрабатывает логику экшона
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_ITEM:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
